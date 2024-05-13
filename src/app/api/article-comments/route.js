import articleCommentModel from "@/models/articleComment";
import connectTodb from "@/configs/db";
import articleCommentValidation from "@/validations/articleComment";
import articleModel from "@/models/article";

export async function POST(req) {
  try {
    connectTodb();

    const { user, username, email, title, body, articleID, score } =
      await req.json();


    await articleCommentValidation
      .validate({
        user,
        username,
        email,
        title,
        body,
        articleID,
        score,
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

    const comment = await articleCommentModel.create({
      user,
      username,
      email,
      title,
      body,
      articleID,
      isAccept: 0,
      score,
      hasAnswer: false,
      isAnswer: false,
    });

    await articleModel.findOneAndUpdate(
      { _id: articleID },
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

    const comments = await articleCommentModel.find({}, "-__v");
    return Response.json({ comments }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
