import { clientAuth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  try {
    const userCredential = await signInWithEmailAndPassword(clientAuth, email, password)
    return NextResponse.json(userCredential, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}