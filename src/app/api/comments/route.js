import commentsModel from "@/models/comment";
import connectTodb from "@/configs/db";
import commentValidation from "@/validations/comment";
import productModel from "@/models/product";

export async function POST(req) {
  try {
    connectTodb();

    const {user,username, email, title, body, productID, score } = await req.json();



// {
//     "username":"arman",
//     "email":"arman@gmail.com",
//     "title":"خوب بود",
//     "body":"نسبتا خوب بود ممنونم",
//     "productID":"662e9f418e6cf83f047faeab",
//     "score":4
// }



    await commentValidation
      .validate({
        username,
        email,
        title,
        body,
        productID,
        score,
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

    const comment = await commentsModel.create({
      user,
      username,
      email,
      title,
      body,
      productID,
      isAccept:0,
      score,
      isAnswer:false
    });

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: productID },
      {
        $push: { comments: comment._id },
      }
    );

    return Response.json(
      { message: "comment created successfully", comment: comment },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}

export async function GET(req) {
  try {
    connectTodb();

    const comments = await commentsModel.find({}, "-__v");
    return Response.json({ comments }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
