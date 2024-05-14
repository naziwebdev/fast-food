import UserModel from "@/models/user";
import connectTodb from "@/configs/db";
import {
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/auth";
import loginValidation from "@/validations/login";
import banModel from "@/models/ban";

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

    const isBaned = await banModel.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (isBaned) {
      return Response.json({ message: "user is ban" }, { status: 401 });
    }

    const isVerifyPassword = await verifyPassword(password, existUser.password);

    if (!isVerifyPassword) {
      return Response.json(
        { message: "email |phone or password is incorrect" },
        { status: 401 }
      );
    }

    const userName = existUser._id;

    const accessToken = generateAccessToken({ userName });


    const refreshToken = generateRefreshToken({ userName });

    await UserModel.findOneAndUpdate(
      { $or: [{ email: identifier }, { phone: identifier }] },
      {
        $set: { refreshToken },
      }
    );

    const headers = new Headers();
    headers.append("Set-Cookie",`token=${accessToken};path=/;httpOnly=true;max-age=60;`);
    headers.append(
      "Set-Cookie",
      `refresh-token=${refreshToken};path=/;httpOnly=true;max-age=1296000;`
    );

    return Response.json(
      { message: "user login successfully" },
      {
        status: 200,
        headers,
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
