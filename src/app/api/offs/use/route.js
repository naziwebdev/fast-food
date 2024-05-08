import connectTodb from "@/configs/db";
import offsModel from "@/models/off";
import { offCodeValidation } from "@/validations/off";

export async function PUT(req) {
  try {
    connectTodb();

    const { code } = await req.json();

    await offCodeValidation.validate({ code }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    const mainCode = await offsModel.findOne({ code });

    if (!mainCode) {
      return Response.json({ message: "code is not found" }, { status: 404 });
    } else if (mainCode.maxUsage === mainCode.usage) {
      return Response.json({ message: "code used already" }, { status: 422 });
    } else {
      await offsModel.findOneAndUpdate(
        { code },
        {
          $inc: {
            usage: 1,
          },
        }
      );
      return Response.json(mainCode, { status: 200 });
    }
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
