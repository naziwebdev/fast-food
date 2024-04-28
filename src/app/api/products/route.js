import productModel from "@/models/product";
import connectTodb from "@/configs/db";
import productValidation from "@/validations/backend/detailsProduct";

export async function POST(req) {
  try {
    connectTodb();

    const {
      title,
      price,
      tags,
      description,
      countAvailable,
      weight,
      materials,
      tast,
      size,
    } = await req.json();



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
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

    const product = await productModel.create({
      title,
      price,
      tags,
      description,
      countAvailable,
      weight,
      materials,
      tast,
      size,
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
      { message: "product created successfully", product: product },
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
