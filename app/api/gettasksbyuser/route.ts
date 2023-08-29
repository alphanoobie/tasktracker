import connectMongo from "@/app/_lib/connectMongo";
import Task from "@/app/_models/task";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const user = url.searchParams.get("user");
  //   console.log(user);
  try {
    await connectMongo();
    const tasks = await Task.find({ user });
    console.log(tasks);
    return NextResponse.json({ ok: true, data: tasks });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
