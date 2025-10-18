import { clientAuth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await signOut(clientAuth)
    return NextResponse.json({ code: 200, message: `Logout succesfull` }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}