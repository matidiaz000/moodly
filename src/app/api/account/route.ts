import { NextRequest, NextResponse } from 'next/server';
import { validatePUT, validatePOST } from './validate';
import { clientAuth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase-admin';

interface IAccount {
  id?: number,
  fullName: string,
  image: string,
  email: string,
  password?: string
}

export async function GET(request: NextRequest) {
  try {
    await isAuthenticated(request)
    const authorizationHeader = request.headers.get('Authorization') as string;
    const token = authorizationHeader.substring(7);
    const decodedToken = await auth.verifyIdToken(token);
    const user = await auth.getUser(decodedToken.uid)
    return NextResponse.json({ code: 200, data: user }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const body: IAccount = await request.json();
  const { id, fullName, image, password } = body;

  try {
    await isAuthenticated(request)
    validatePUT(body)
    const user = {
      password: password,
      displayName: fullName,
      photoURL: image
    }
    const userRecord = await auth.updateUser(id as unknown as string, user)
    return NextResponse.json({ code: 200, data: userRecord, message: `El usuario con uid '${userRecord.uid}' se edito correctamente.` }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body: IAccount = await request.json();
  const { email, fullName, password } = body;

  try {
    validatePOST(body)
    const userCredential = await createUserWithEmailAndPassword(clientAuth, email, password as string)
    if (clientAuth.currentUser) {
      onAuthStateChanged(clientAuth, async (user) => {
        if (user) await sendEmailVerification(user)
      })
      await updateProfile(clientAuth.currentUser, { displayName: fullName })
      return NextResponse.json({ code: 200, data: userCredential, message: `El usuario con uid '${userCredential.user.uid}' se creo correctamente. Se envio un correo electronico a ${userCredential.user.email} para que valide su identidad.` }, { status: 200 });
    } else {
      throw `Hubo un problema al intentar obtener el usuario.`
    }
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function isAuthenticated(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) throw "El header Bearer token es obligatorio."
  const token = authorizationHeader.substring(7);
  try {
    const decodedToken = await auth.verifyIdToken(token);
    // Access user information from decodedToken (e.g., decodedToken.uid)
    if (!decodedToken.email_verified) {
      throw `El usuario con uid ${decodedToken.uid} no tiene el correo verificado.`
    }
  } catch (error) {
    throw error
  }
}