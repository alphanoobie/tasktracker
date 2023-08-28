import connectMongo from "@/app/_lib/connectMongo";
import Task from "@/app/_models/task";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await connectMongo();
    const response = await Task.create(data);
    console.log(response);
    return NextResponse.json({ ok: "true" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
