import UserModel from "@/models/user";
import connectTodb from "@/configs/db";
import {
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/auth";
import loginValidation from "@/validations/login";

export async function POST(req) {
  try {
    connectTodb();

    const { identifier, password } = await req.json();

    await loginValidation.validate({ identifier, password }).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const existUser = await UserModel.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!existUser) {
      return Response.json(
        { message: "email |phone or password is incorrect " },
        { status: 422 }
      );
    }

    const isVerifyPassword = await verifyPassword(password, existUser.password);

    if (!isVerifyPassword) {
      return Response.json(
        { message: "email |phone or password is incorrect" },
        { status: 401 }
      );
    }

    const userName = existUser.name;

    const accessToken = generateAccessToken({ userName });

    const refreshToken = generateRefreshToken({ userName });

    await UserModel.findOneAndUpdate(
      { $or: [{ email: identifier }, { phone: identifier }] },
      {
        $set: { refreshToken },
      }
    );

    return Response.json(
      { message: "user login successfully" },
      {
        status: 200,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;` },
      }
    );
  } catch (err) {
    return Response.json(
      {
        message: err,
      },
      { status: err.statusCode || 500 }
    );
  }
}
