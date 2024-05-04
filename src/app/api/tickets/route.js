import connectTodb from "@/configs/db";
import ticketValidation from "@/validations/ticket";
import ticketModel from "@/models/ticket";
import { authUser } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    connectTodb();
    const { title, body, department, subDepartment, priority } =
      await req.json();

    const user = await authUser();

    if (!user) {
      return Response.json({ message: "user isnot authorized" }, { status:401 });
    }

    await ticketValidation
      .validate({ title, body, department, subDepartment, priority })
      .catch((error) => {
        error.statusCode = 400;
        throw error;
      });

    await ticketModel.create({
      title,
      body,
      user: user._id,
      department,
      subDepartment,
      priority,
      hasAnswer: false,
    });

    return Response.json(
      { message: "ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
