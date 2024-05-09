import UserModel from "@/models/user";
import connectTodb from "@/configs/db";
import { UserPasswordValidator } from "@/validations/editUser";
import { isValidObjectId } from "mongoose";
import { hashPassword } from "@/utils/auth";

export async function PUT(req, { params }) {
  try {
    connectTodb();
    const { password } = await req.json();

    await UserPasswordValidator.validate({ password }).catch((error) => {
      statusCode = 422;
      throw error;
    });

    const hashedPassword = await hashPassword(password);

    await UserModel.findOneAndUpdate(
      { _id: params.id },
      { password: hashedPassword }
    );

    return Response.json(
      { message: "user password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: ErrorEvent.statusCode || 500 }
    );
  }
}
