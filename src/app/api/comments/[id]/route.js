import connectTodb from "@/configs/db";
import commentModel from "@/models/comment";
import { isValidObjectId } from "mongoose";

export async function DELETE(req, { params }) {
  try {
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await commentModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "comment removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
