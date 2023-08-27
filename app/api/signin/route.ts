import connectMongo from "@/app/_lib/connectMongo";
import User from "@/app/_models/user";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await connectMongo();
    const user = await User.findOne({ username: data.username });
    if (user && user.username === data.username) {
      const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
      );
      if (isPasswordValid === true) {
        return NextResponse.json({ ok: true, user: user });
      } else {
        return NextResponse.json({ message: "Incorrect password" });
      }
    } else {
      return NextResponse.json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Sign In Error" }, { status: 400 });
  }
}
