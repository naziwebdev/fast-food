import connectTodb from "@/configs/db";
import offModel from "@/models/off";
import { isValidObjectId } from "mongoose";

export async function DELETE(req, { params }) {
  try {
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await offModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "off removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
