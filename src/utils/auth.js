import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const generateAccessToken = (data) => {
  const accessToken = sign({ ...data }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "60s",
  });
};

export const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: "15d",
  });

  return token;
};

export const verifyAccessToken = (token) => {
  try {
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    return payload;
  } catch (error) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
};
