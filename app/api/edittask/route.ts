import connectMongo from "@/app/_lib/connectMongo";
import Task from "@/app/_models/task";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const data = await request.json();
  try {
    await connectMongo();
    await Task.findOneAndUpdate({_id: data._id}, data);
    return NextResponse.json({ ok: "true" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

// export async function GET() {
//   await Task.deleteMany({});
//   return NextResponse.json({ deleted: true });
// }
