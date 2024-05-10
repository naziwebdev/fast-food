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
      return Response.json({message:'this api is protected'},{status:401})
    }
    connectTodb();

 
    const formData = await req.formData()
    const title = formData.get('title')
    const price = formData.get('price')
    const tags = formData.get('tags')
    const description = formData.get('description')
    const  countAvailable = formData.get(' countAvailable')
    const  weight = formData.get(' weight')
    const  materials = formData.get(' materials')
    const tast = formData.get('tast')
    const size = formData.get('size')
    const img = formData.get('img')
     



    await productValidation
      .validate({
        title,
        price,
        tags,
        description,
        countAvailable,
        weight,
        materials,
        tast,
        size,
        img
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

      const buffer = Buffer.from(await img.arrayBuffer())

      const filename = new Date() + img.name

      const pathFile = path.join(process.cwd(),'public/uploads/'+ filename)

      await writeFile (pathFile,buffer)



    await productModel.create({
      title,
      price,
      tags,
      description,
      countAvailable,
      weight,
      materials,
      tast,
      size,
      img:`http://localhost:3000/uploads/${filename}`
    });

    // {
    //     "title":"پیتزا مخلوط با سس سیر تند",
    //     "price":170000,
    //     "tags":["فست فود","پیتزا","برگر","ساندویچ","پپرونی","چیز برگر"],
    //     "description":"پیتزا (به ایتالیایی: Pizza)[۱] غذایی است به شکل نان گِرد صافی که در فر یا اجاق‌گاز یا تنور پخته می‌شود و معمولاً روی آن را با سس گوجه‌فرنگی و پنیر می‌پوشانند و همچنین مواد دلخواه دیگر، روی نان اضافه می‌کنند. پنیری که استفاده می‌شود معمولاً پنیر موزارلا یا پنیر پیتزا است. همچنین از مواد مختلفی (مانند ژامبون، قارچ، زیتون، پیاز، فلفل سبز، گوجه فرنگی و …) برای تهیه پیتزا استفاده می‌شود. به یک پیتزای کوچک پیزتا (Pizzetta)[۲] و به کسی که پیتزا می‌پزد، پیزائولو (Pizzaiolo) گفته می‌شود.[۳",
    //     "countAvailable":4,
    //     "weight":200,
    //     "materials":["سوسیس","قارچ","سیر","سیب زمینی"],
    //     "tast":"تند",
    //     "size":23

    // }

    return Response.json(
      { message: "product created successfully"},
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
    return Response.json({ messsage: error }, { status: 500 });
  }
}
