import type { ITypes } from '@/app/terapia/utilities';
import { db } from '@/lib/firebase-admin';
import dayjs, { type Dayjs } from 'dayjs';
import { NextRequest, NextResponse } from 'next/server';
import { isDate, validate } from './validate';
import { isAuthenticated } from '../account/route';

const collectionName = "alarm";

interface IAlarm {
  id?: number,
  title: string,
  time: Dayjs,
  when: ITypes[] | Dayjs
}

export async function GET(request: NextRequest) {
  try {
    await isAuthenticated(request)
    const snapshot = await db.collection(collectionName).get();
    const data: any[] = [];
    snapshot.forEach((doc) => {
      const item = {id: doc.id, ...doc.data()}
      data.push(item)
    });
    //"1991-02-10T20:32:23.551Z"
    // [ "martes", "miercoles" ]
    return NextResponse.json({ code: 200, data: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const body: IAlarm = await request.json();

  try {
    await isAuthenticated(request)
    validate(body)
    const docRef = db.collection(collectionName).doc(body.id as any);
    await docRef.update(body as any);
    return NextResponse.json({ code: 200, message: `El edito el item ${body.id} correctamente.` }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body: IAlarm = await request.json();

  try { 
    await isAuthenticated(request)
    validate(body);
    const docRef = db.collection(collectionName).doc();
    await docRef.set(body);
    return NextResponse.json({ code: 200, message: `El creo el item correctamente.` }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  try {
    await isAuthenticated(request)
    if (!body.id || typeof body.id != 'string') throw ""
    const docRef = db.collection(collectionName).doc(body.id);
    await docRef.delete();
    return NextResponse.json({ code: 200, message: `Se elimino el item ${body.id} correctamente.`}, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}