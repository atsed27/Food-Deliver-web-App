import { db } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    console.log('hy');
    const products = await db.product.findMany();
    if (!products)
      return new NextResponse(JSON.stringify('there is Not product'), {
        status: 404,
      });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('server error'), { status: 200 });
  }
};
