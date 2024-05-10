import connectTodb from "@/configs/db";
import productModel from "@/models/product";
import { isValidObjectId } from "mongoose";
import { authAdmin } from "@/utils/serverHelper";


// export async function PUT (req,{params}){

// }




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

    await productModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "comment removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
