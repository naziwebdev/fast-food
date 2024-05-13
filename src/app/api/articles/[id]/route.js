import connectTodb from "@/configs/db";
import articleModel from "@/models/article";
import articleValidation from "@/validations/article";
import { isValidObjectId } from "mongoose";
import { authAdmin } from "@/utils/serverHelper";
import { writeFile } from "fs/promises";
import path from "path";

export async function PUT(req, { params }) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json(
        { message: "this api is protected" },
        { status: 401 }
      );
    }
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const img = formData.get("img");

    await articleValidation
      .validate({
        title,
        description,
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

    await articleModel.findOneAndUpdate(
      { _id: params.id },
      {
        title,
        description,
        img: `http://localhost:3000/uploads/${filename}`,
      }
    );

    return Response.json(
      { message: "article updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json(
        { message: "this api is protected" },
        { status: 401 }
      );
    }
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await articleModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "article removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
