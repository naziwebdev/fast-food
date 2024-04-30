import connectTodb from "@/configs/db";
import userModel from "@/models/user";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    connectTodb();

    const token = cookies().get("token");

    let user = null;

    if (token) {
      const payloadToken = verifyAccessToken(token.value);

      if (payloadToken) {
        user = await userModel.findOne(
          { name: payloadToken.userName },
          "-password -refreshToken -__v"
        );
      }
    }

    return Response.json(user);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
