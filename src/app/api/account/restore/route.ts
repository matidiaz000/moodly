import { clientAuth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  try {
    await sendPasswordResetEmail(clientAuth, email)
    return NextResponse.json({ code: 200, message: `Se envio un correo electronico a ${email} para restablecer tu contraseña.` }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}