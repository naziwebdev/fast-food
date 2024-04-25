import connectTodb from "@/configs/db";
import UserModel from '@/models/user'


export async function POST(req) {
  try {
    connectTodb()
    
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
