import connectTodb from "@/configs/db";
import offModel from "@/models/off";
import { isValidObjectId } from "mongoose";
import { authAdmin } from "@/utils/serverHelper";
import offValidation from "@/validations/off";

export async function PUT(req, { params }) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json(
        { message: "this api is protected" },
        { status: 401 }
      );
    }

    connectTodb();

    const { code, percent, maxUsage } = await req.json();

    await offValidation
      .validate({
        code,
        percent,
        maxUsage,
      })
      .catch((err) => {
        err.statusCode = 400;
        throw err;
      });

    await offModel.findOneAndUpdate(
      { _id: params.id },
      { code, percent, maxUsage }
    );

    return Response.json(
      { message: "off updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: ErrorEvent.statusCode || 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const isAdmin = await authAdmin();

    if (!isAdmin) {
      return Response.json(
        { message: "this api is protected" },
        { status: 401 }
      );
    }
    connectTodb();

    if (!isValidObjectId(params.id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }

    await offModel.findOneAndDelete({ _id: params.id });

    return Response.json(
      { message: "off removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
