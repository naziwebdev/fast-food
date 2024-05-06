import connectTodb from "@/configs/db";
import banModel from "@/models/ban";
import { banValidator } from "@/validations/register";

export async function POST(req) {
  try {
    connectTodb()
    const { phone } = await req.json();

    await banValidator.validate({ phone }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    await banModel.create({ phone });

    return Response.json(
      { message: "use baned successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
