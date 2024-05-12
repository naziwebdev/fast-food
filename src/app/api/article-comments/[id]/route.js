import connectTodb from "@/configs/db";
import articleCommentModel from '@/models/articleComment'
import { isValidObjectId } from "mongoose";
import { authAdmin } from "@/utils/serverHelper";

export async function DELETE(req, { params }) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json({message:'this api is protected'},{status:401})
    }
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await articleCommentModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "comment removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
