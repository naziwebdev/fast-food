import connectTodb from "@/configs/db";
import banModel from "@/models/ban";
import { banValidator } from "@/validations/register";
import { authAdmin } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json({message:'this api is protected'},{status:401})
    }
    connectTodb();
    const { phone, email} = await req.json();

    await banValidator.validate({ phone }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    const user = await banModel.findOne({ phone , email});

    if (user) {
      return Response.json({ message: "user baned already" }, { status: 400 });
    }

    await banModel.create({ phone,email });

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
