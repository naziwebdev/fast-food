import connectTodb from "@/configs/db";
import contactModel from "@/models/contact";
import contactValidation from "@/validations/contact";

export async function POST(req) {
  try {
    connectTodb();

    const { name, email, phone, company, message } = await req.json();

    await contactValidation
      .validate({ name, email, phone, company, message })
      .catch((error) => {
        error.statusCode = 400;
        throw error;
      });

    const contact = await contactModel.create({
      name,
      email,
      phone,
      company,
      message,
    });

    return Response.json(
      { message: "contact add successtully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
