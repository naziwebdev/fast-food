import connectTodb from "@/configs/db";
import subDepartmentModel from '@/models/subDepartment'
import { subDepartmentValidation} from "@/validations/ticket";

export async function POST(req) {
  try {
    connectTodb();
    const { title , department} = await req.json();

    await subDepartmentValidation.validate({ title , department}).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    await subDepartmentModel.create({
      title,
      department
    });

    return Response.json(
      { message: "subDepartment created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}

