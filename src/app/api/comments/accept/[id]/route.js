import connectTodb from "@/configs/db";
import commentModel from "@/models/comment";
import { isValidObjectId } from "mongoose";

export async function PUT(req, { params }) {
  try {
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await commentModel.findOneAndUpdate({ _id: params.id }, { isAccept: 1 });

    return Response.json(
      { message: "comment accept successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
