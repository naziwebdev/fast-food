import UserModel from "@/models/user";
import connectTodb from "@/configs/db";
import UserValidator from "@/validations/editUser";

export async function PUT(req, { params }) {
  try {
    connectTodb()
    const { name, email, phone } = await req.json();

    await UserValidator.validate({ name, email, phone }).catch((error) => {
      statusCode = 422;
      throw error;
    });

    await UserModel.findOneAndUpdate(
      { _id: params.id },
      { name, email, phone }
    );

    return Response.json(
      { message: "user updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: ErrorEvent.statusCode || 500 }
    );
  }
}
