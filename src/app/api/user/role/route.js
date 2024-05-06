import connectTodb from "@/configs/db";
import userModel from "@/models/user";
import { isValidObjectId } from "mongoose";

export async function PUT(req) {
  try {
    connectTodb();

    const { id } = await req.json();

    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    const user = await userModel.findOne({_id:id}).lean()

    await userModel.findOneAndUpdate(
      { _id: id },
      {
        role: user.role === "ADMIN" ? "USER" : "ADMIN",
      }
    );

    return Response.json(
      { message: "role changed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
