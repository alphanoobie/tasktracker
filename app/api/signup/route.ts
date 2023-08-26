import connectMongo from "@/app/_lib/connectMongo";
import User from "@/app/_models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo()
  const data = await request.json();
  await User.create(data)
  console.log(data);
  return NextResponse.json({ ok: true });
}
