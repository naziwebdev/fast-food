import connectTodb from "@/configs/db";
import productModel from "@/models/product";
import productValidation from "@/validations/detailsProduct";
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
    const price = formData.get("price");
    const tags = formData.get("tags");
    const description = formData.get("description");
    const countAvailable = formData.get("countAvailable");
    const weight = formData.get("weight");
    const materials = formData.get("materials");
    const tast = formData.get("tast");
    const size = formData.get("size");
    const img = formData.get("img");


    await productValidation
      .validate({
        title,
        price,
        tags: tags.split(","),
        description,
        countAvailable,
        weight,
        materials: materials.split(","),
        tast,
        size,
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

    await productModel.findOneAndUpdate(
      { _id:params.id },
      {
        title,
        price,
        tags: tags.split(","),
        description,
        countAvailable,
        weight,
        materials: materials.split(","),
        tast,
        size,
        img: `http://localhost:3000/uploads/${filename}`,
      }
    );

   

    return Response.json(
      { message: "product updated successfully" },
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

    await productModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "comment removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
