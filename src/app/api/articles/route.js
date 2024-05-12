import articleModel from "@/models/article";
import connectTodb from "@/configs/db";
import articleValidation from "@/validations/article";
import { authAdmin } from "@/utils/serverHelper";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json(
        { message: "this api is protected" },
        { status: 401 }
      );
    }
    connectTodb();

    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const author = formData.get("author");
    const img = formData.get("img");

    await articleValidation
      .validate({
        title,
        description,
        author,
        img,
      })
      .catch((error) => {
        error.statusCode = 400;
        throw error;
      });

    const buffer = Buffer.from(await img.arrayBuffer());

    const filename = new Date().getTime() + img.name;

    const pathFile = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(pathFile, buffer);

    await productModel.create({
      title,
      description,
      author,
      img: `http://localhost:3000/uploads/${filename}`,
    });

    return Response.json(
      { message: "article created successfully" },
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
    const articles = await articleModel
      .find({}, "-__v")
      .populate("comments", "-__v");

    return Response.json({ articles }, { status: 200 });
  } catch (error) {
    return Response.json({ messsage: error.message }, { status: 500 });
  }
}
