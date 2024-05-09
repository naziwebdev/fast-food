import connectTodb from "@/configs/db";
import userModel from "@/models/user";
import { isValidObjectId } from "mongoose";
import { authAdmin } from "@/utils/serverHelper";

export async function PUT(req) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json({message:'this api is protected'},{status:401})
    }
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
