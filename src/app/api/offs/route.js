import offModel from "@/models/off";
import connectTodb from "@/configs/db";
import offValidation from "@/validations/off";
import { authAdmin } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json({message:'this api is protected'},{status:401})
    }

    connectTodb();

    const { code, percent, maxUsage } = await req.json();

    await offValidation
      .validate({
        code,
        percent,
        maxUsage,
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

    await offModel.create({
      code,
      percent,
      maxUsage,
      usege: 0,
    });

    return Response.json(
      { message: "off created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
