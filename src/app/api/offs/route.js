import offModel from "@/models/off";
import connectTodb from "@/configs/db";
import offValidation from "@/validations/off";

export async function POST(req) {
  try {
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

    const comment = await offModel.create({
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
