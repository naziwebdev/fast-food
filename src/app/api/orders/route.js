import connectTodb from "@/configs/db";
import orderModel from "@/models/order";
import orderValidation from "@/validations/order";

export async function POST(req) {
  try {
    connectTodb();
    const { userID, products, price, address } = await req.json();

    await orderValidation
      .validate({ userID, products, price, address })
      .catch((error) => {
        error.statusCode = 400;
        throw error;
      });

    const code = Math.floor(Math.random() * 999999);

    await orderModel.create({
      userID,
      products,
      price,
      code,
      address,
    });

    return Response.json(
      { message: "order created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
