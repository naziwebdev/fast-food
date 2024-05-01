import connectTodb from "@/configs/db";
import Usermodel from "@/models/user";
import { verifyAccessToken } from "./auth";
import { cookies } from "next/headers";

export const authUser = async () => {
    connectTodb();
  
    const token = cookies().get("token");
    let user = null;
  
    if (token) {
      const tokenPayload = verifyAccessToken(token.value);
  
      if (tokenPayload) {
        user = await Usermodel.findOne({ name: tokenPayload.userName });
      }
    }
  
    return user;
  };
  