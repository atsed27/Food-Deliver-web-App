import { db } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const products = await db.product.findMany({
      where: {
        isFeatured: true,
      },
    });
    if (!products)
      return new NextResponse(JSON.stringify('there is Not best product'), {
        status: 404,
      });

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('server error'), { status: 500 });
  }
};
