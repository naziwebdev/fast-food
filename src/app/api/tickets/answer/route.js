import connectTodb from "@/configs/db";
import ticketModel from "@/models/ticket";
import { answerTicketValidation } from "@/validations/ticket";
import { authUser } from "@/utils/serverHelper";

export async function POST(req) {
  try {
    connectTodb();

    const { title, body, department, subDepartment, priority, ticketID } =
      await req.json();

    const user = await authUser();

    await answerTicketValidation
      .validate({
        title,
        body,
        department,
        subDepartment,
        priority,
        mainTicketID: ticketID,
      })
      .catch((error) => {
        error.statusCode = 422;
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
      isAnswer: true,
      mainTicketID: ticketID,
    });

    await ticketModel.findOneAndUpdate(
      { _id: ticketID },
      {
        hasAnswer: true,
      }
    );

    return Response.json(
      { message: "answer ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
