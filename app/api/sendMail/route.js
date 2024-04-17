import { Sendmail } from '@/app/utils/sendutil/sendmailerr'; 
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const numtelephone = formData.get('phone_number');
    const nbcommands = formData.get('numbercmd');
    const response = await Sendmail(email, name, numtelephone, nbcommands); 
    if (!response.ok) {
      return NextResponse.json({ message: 'Failed' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
