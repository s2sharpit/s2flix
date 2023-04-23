import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  try {
    const body = await req.json();
    await dbConnect();
    await Contact.create(body);

    return NextResponse.json(
      { message: "Message Sent Successfully!" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
