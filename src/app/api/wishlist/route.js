import connectTodb from "@/configs/db";
import wishlistModel from "@/models/wishlist";
import wishlistValidation from "@/validations/wishlist";

export async function POST(req) {
  try {

    connectTodb();
    const { user, product } = await req.json();

    await wishlistValidation.validate({ user, product }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    const existBefore = await wishlistModel.findOne({user , product})

    if(existBefore){
      return Response.json({message:'this item exist already'},{status:409})
    }

    const wishItem = await wishlistModel.create({ user, product });

    return Response.json(
      { message: "wishlist add successtully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status:error.statusCode || 500 });
  }
}


export async function GET(req){
  try{

    connectTodb()

    const wishlist = await wishlistModel.find({}).lean()

    return Response.json(
        wishlist ,
      { status: 200}
    );

  }catch (error) {
    return Response.json({ message: error }, { status:500 });
  }
}
