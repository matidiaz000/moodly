import { clientAuth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  try {
    const userCredential = await signInWithEmailAndPassword(clientAuth, email, password)
    if (userCredential.user.emailVerified) {
      const idToken = await userCredential.user.getIdToken()
      return NextResponse.json({ code: 200, data: { token: idToken, userCredential } }, { status: 200 });
    } else {
      throw `El usuario con uid ${userCredential.user.uid} no tiene el correo verificado.`
    }
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}