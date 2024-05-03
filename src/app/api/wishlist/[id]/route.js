import connectTodb from "@/configs/db";
import wishlistModel from "@/models/wishlist";
import { authUser } from "@/utils/serverHelper";

export async function DELETE(req, { params }) {
  try {
    connectTodb();
    const user = await authUser();

    if (!user) {
      return Response.json({ message: "user not authorized" }, { status: 401 });
    }

    await wishlistModel.findOneAndDelete({
      user: user._id,
      product: params.id,
    });

    Response.json({ message: "user removed successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
