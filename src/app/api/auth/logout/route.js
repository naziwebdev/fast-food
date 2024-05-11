import { cookies } from "next/headers";

export async function POST(req) {
  try {
    cookies().delete("token");
    cookies().delete('refresh-token')

    return Response.json(
      { message: "user logout successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
