import connectMongo from "@/app/_lib/connectMongo";
import User from "@/app/_models/user";
import { Error } from "mongoose";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const data = await request.json();
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const newUser = {
    username: data.username,
    password: hashedPassword,
  };
  try {
    await connectMongo();
    await User.create(newUser);
    return NextResponse.json({ ok: true });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 403 });
  }
}
