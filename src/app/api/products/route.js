import productModel from "@/models/product";
import connectTodb from "@/configs/db";
import productValidation from "@/validations/detailsProduct";
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
        tags:tags.split(','),
        description,
        countAvailable,
        weight,
        materials:materials.split(','),
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

    await productModel.create({
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
    });

    return Response.json(
      { message: "product created successfully" },
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
    const products = await productModel
      .find({}, "-__v")
      .populate("comments", "-__v");

    return Response.json({ products }, { status: 200 });
  } catch (error) {
    return Response.json({ messsage: error.message }, { status: 500 });
  }
}
