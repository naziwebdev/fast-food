import connectTodb from "@/configs/db";
import subDepartmantModel from "@/models/subDepartment";
import { isValidObjectId } from "mongoose";

export async function GET(req, { params }) {
  try {
    connectTodb();

    const departmentID = params.id;

    if (!isValidObjectId(departmentID)) {
      return Response.json(
        { message: "department id is not valid" },
        { status: 422 }
      );
    }

    const subDepartmants = await subDepartmantModel
      .find({ department: departmentID })
      .lean();

    return Response.json(subDepartmants , { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
