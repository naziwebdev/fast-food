import connectTodb from "@/configs/db";
import articleCommentModel from "@/models/articleComment";
import { answerArticleCommentValidation } from "@/validations/articleComment";

import { authUser } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    connectTodb();

    const { username, email, title, body, articleID, score, mainCommentID } =
      await req.json();

    const user = await authUser();

    await answerArticleCommentValidation
      .validate({
        username,
        email,
        title,
        body,
        articleID,
        score,
        mainCommentID,
      })
      .catch((error) => {
        error.statusCode = 422;
        throw error;
      });

    await articleCommentModel.create({
      user: user._id,
      username,
      email,
      title,
      body,
      articleID,
      score,
      mainCommentID,
      isAnswer: true,
    });

    await articleCommentModel.findOneAndUpdate(
      { _id: mainCommentID },
      { hasAnswer: true }
    );

    return Response.json(
      { message: "answer comment created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
