const request = require("request");
import connectTodb from "@/configs/db";
import otpModel from "@/models/otp";
import otpValidation from "@/validations/otp";
// import userModel from "@/models/user";
import banModel from "@/models/ban";

export async function POST(req) {
  try {
    connectTodb();

    const { phone } = await req.json();
 

    //validate
    await otpValidation.validate({ phone }).catch((error) => {
      error.statusCode = 400;
      throw error;
    });

    // check isUser already
    const isUserExist = await userModel.findOne({ phone });
    if (isUserExist) {
      return Response.json({ message: "user exist already" }, { status: 409 });
    }

    //check ban user
    const isBaned = await banModel.findOne({phone})

    if (isBaned) {
      return Response.json({ message: "user is ban" }, { status: 401 });
    }

    //generate otp code
    const code = Math.floor(Math.random() * 99999);

    //generate expTime
    const now = new Date();
    const expTime = now.getTime() + 120000;
    

    request.post(
      {
        url: "http://ippanel.com/api/select",
        body: {
          op: "pattern",
          user: "09921558293",
          pass: "sabzlearn1212",
          fromNum: "3000505",
          toNum: phone,
          patternCode: "jqcrkffb9sevvss",
          inputData: [{ "verification-code": code }],
        },
        json: true,
      },
      async function (error, response, body) {
        if (!error && response.statusCode === 200) {
          //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE

          await otpModel.create({
            phone,
            code,
            expTime,
          });
          console.log(response.body);
        } else {
          console.log("whatever you want");
        }
      }
    );

    return Response.json(
      { message:'Code sent successfully '},
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      { status: error.statusCode || 500 }
    );
  }
}
