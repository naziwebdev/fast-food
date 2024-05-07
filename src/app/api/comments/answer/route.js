import connectTodb from "@/configs/db";
import commentModel from "@/models/comment";
import { answerCommentValidation } from "@/validations/comment";

import { authUser } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    connectTodb();

    const { username, email, title, body, productID, score, mainCommentID } =
      await req.json();

    const user = await authUser();

    await answerCommentValidation
      .validate({
        username,
        email,
        title,
        body,
        productID,
        score,
        mainCommentID,
      })
      .catch((error) => {
        error.statusCode = 422;
        throw error;
      });

    await commentModel.create({
      user: user._id,
      username,
      email,
      title,
      body,
      productID,
      score,
      mainCommentID,
    });

    await commentModel.findOneAndUpdate(
      { _id: mainCommentID },
      {
        isAnswer: true,
      }
    );

    return Response.json(
      { message: "answer ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
