import connectMongo from "@/app/_lib/connectMongo";
import Task from "@/app/_models/task";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const data = await request.json();
  try {
    await connectMongo();
    const response = await Task.findOneAndDelete(data)
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
