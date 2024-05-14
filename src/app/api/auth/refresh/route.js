import connectTodb from "@/configs/db";
import userModel from "@/models/user";
import { cookies } from "next/headers";
import { generateAccessToken } from "@/utils/auth";
import { verify } from "jsonwebtoken";

export async function POST(req) {
  try {
    connectTodb();

    
    const refreshToken = cookies().get("refresh-token").value;
 
    if (!refreshToken) {
      return Response.json({ message: "user unathorized" }, { status: 401 });
    }

    const verifyRefreshToken = verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );
    if (!verifyRefreshToken) {
      return Response.json({ message: "user unathorized" }, { status: 401 });
    }

    const user = await userModel.findOne({ refreshToken });

    if (!user) {
      return Response.json({ message: "user unathorized" }, { status: 401 });
    }

    const userName = user._id;
    const accessToken = generateAccessToken({ userName });

    return Response.json(
      { message: "new access token generate successfully" },
      {
        status: 200,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;max-age=60;` },
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
