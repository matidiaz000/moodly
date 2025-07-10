import { getAuth } from 'firebase-admin/auth';
import { NextRequest, NextResponse } from 'next/server';
import { validatePUT, validatePOST } from './validate';

interface IAccount {
  id?: number,
  fullName: string,
  image: string,
  email: string,
  password?: string
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const uid = searchParams.get('uid');

  try {
    await isAuthenticated(request)
    if (!uid) throw `El query 'uid' es obligatorio.`
    const userRecord = await getAuth().getUser(uid)
    return NextResponse.json(userRecord.toJSON(), { status: 200 });
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
    const userRecord = await getAuth().updateUser(id as unknown as string, user)
    return NextResponse.json(`El usuario con uid '${userRecord.uid}' se edito correctamente.`, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body: IAccount = await request.json();
  const { email, fullName, password } = body;

  try {
    validatePOST(body)
    const user = {
      email: email,
      displayName: fullName,
      password: password,
      disabled: false,
      emailVerified: false
    }
    const userRecord = await getAuth().createUser(user)
    return NextResponse.json(`El usuario con uid '${userRecord.uid}' se creo correctamente.`, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

async function isAuthenticated(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) throw "Unauthorized"
  const token = authorizationHeader.substring(7);
  try {
    await getAuth().verifyIdToken(token);
    // Access user information from decodedToken (e.g., decodedToken.uid)
  } catch (error) {
    throw "Unauthorized"
  }
}