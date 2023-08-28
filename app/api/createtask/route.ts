import connectMongo from "@/app/_lib/connectMongo";
import Task from "@/app/_models/task";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await connectMongo();
    await Task.create(data);
    return NextResponse.json({ ok: "true" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
