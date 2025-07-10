import { NextRequest, NextResponse } from 'next/server';
import { IconsAnimo, IconsActividad, IconsDormir } from '@/components/Icons';
import { db } from '@/lib/firebase-admin';
import { validate } from './validate';

const collectionName = "records";

interface IRecordResponse {
  img: string,
  mood: IconsAnimo,
  sleep: IconsDormir,
  activities: IconsActividad[],
  note: string,
  date: Date
}

interface IRecordResponseWithID extends IRecordResponse {
  id: string
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  try {
    if (!offset || !limit) throw `La llamada debe tener las querys 'offset' y 'limit'.`
    const snapshot = await db.collection(collectionName).get();
    const data: any[] = [];
    snapshot.forEach((doc) => {
      const item = {id: doc.id, ...doc.data()}
      data.push(item)
    });
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const body: IRecordResponseWithID = await request.json();
  try {
    validate(body);
    const docRef = db.collection(collectionName).doc(body.id);
    await docRef.update(body as any);
    return NextResponse.json(`El edito el item ${body.id} correctamente.`, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body: IRecordResponse = await request.json();

  try {
    validate(body);
    const docRef = db.collection(collectionName).doc();
    await docRef.set(body);
    return NextResponse.json(`El creo el item correctamente.`, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  try {
    if (!body.id || typeof body.id != 'string') throw ""
    const docRef = db.collection(collectionName).doc(body.id);
    await docRef.delete();
    return NextResponse.json(`Se elimino el item ${body.id} correctamente.`, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}