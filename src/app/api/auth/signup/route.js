import connectTodb from "@/configs/db";
import registerValidator from "@/validations/backend/register";
import UserModel from "@/models/user";
import { hashPassword, generateAccessToken } from "@/utils/auth";

export async function POST(req) {
  try {
    connectTodb();

    const body = await req.json();

    const { name, email, phone, password } = body;
    console.log(email, phone);
    await registerValidator.validate(body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const existUser = await UserModel.findOne({phone});

    console.log(existUser);
    if (existUser) {
      return Response.json(
        {
          message: "user exist already before",
        },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hashPassword(password);

    const accessToken = generateAccessToken({ name });

    const users = await UserModel.find({}).lean();

    await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    return Response.json(
      {
        message: "user registered successfully",
      },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: err.statusCode || 500 });
  }
}
