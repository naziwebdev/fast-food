import connectTodb from "@/configs/db";
import departmentModel from "@/models/department";
import { departmentValidation } from "@/validations/ticket";

export async function POST(req) {
  try {
    connectTodb();
    const { title } = await req.json();

    await departmentValidation.validate({ title }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    await departmentModel.create({
      title,
    });

    return Response.json(
      { message: "department created successfully" },
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
    connectTodb();
    const departments = await departmentModel.find({}).lean();
    return Response.json(departments , {status:200});
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
