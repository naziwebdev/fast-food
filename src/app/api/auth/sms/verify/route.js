import connectTodb from "@/configs/db";
import otpModel from "@/models/otp";
import userModel from "@/models/user";
import { verifyOtpValidation } from "@/validations/otp";
import { generateAccessToken } from "@/utils/auth";

export async function POST(req) {
  try {
    connectTodb();

    const { phone, code } = await req.json();

    //validate
    await verifyOtpValidation.validate({ phone, code }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    const otp = await otpModel.findOne({ phone, code });

    if (!otp) {
      return Response.json({ message: "code is incorrect" }, { status: 409 });
    }

    const now = new Date();
    const currentTime = now.getTime();

    if (otp.expTime < currentTime) {
      return Response.json({ message: "code is expire" }, { status: 409 });
    }

    const userName = code + "@gmail.com";
    const token = generateAccessToken({ userName });

    const users = await userModel.find({});

    await userModel.create({
      phone,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    return Response.json(
      { message: "user register successfully " },
      {
        status: 201,
        headers: { "Set-Coookie":`token=${token};path=/;httpOnly=true;` },
      }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
