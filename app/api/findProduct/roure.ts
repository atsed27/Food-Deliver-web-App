import { db } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const categories = await db.category.findMany();
    if (!categories)
      return new NextResponse(
        JSON.stringify('there is no category page found'),
        { status: 404 }
      );
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json('Server Error', { status: 500 });
  }
};
