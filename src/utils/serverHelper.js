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

      user = await Usermodel.findOne({_id: tokenPayload.userName });
    }
  }

  return user;
};

export const authAdmin = async () => {
  connectTodb();

  const token = cookies().get("token");

  let admin = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);

    if (tokenPayload) {
      admin = await Usermodel.findOne({ _id: tokenPayload.userName });
      if (admin.role === "ADMIN") {
        return admin;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }

  return admin;
};