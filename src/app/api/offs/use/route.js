import connectTodb from "@/configs/db";
import offsModel from "@/models/off";

export async function PUT(req) {
  try {
    connectTodb();

    const { code } = await req.json();

    const mainCode = await offsModel.findOne({ code });

    if (!mainCode) {
      return Response.json({ message: "code is not found" }, { status: 404 });
    } else if (mainCode.maxUsage === mainCode.usage) {
      return Response.json({ message: "code used already" }, { status: 422 });
    } else {

        await offsModel.findOneAndUpdate({code},{
            $inc:{
                usage:1
            }
        })
      return Response.json(mainCode, { status: 200 });
    }
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
