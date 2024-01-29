import { db } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const findOne = await db.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!findOne)
      return new NextResponse(JSON.stringify('product is not found'));
    return new NextResponse(JSON.stringify(findOne), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('server error'), { status: 500 });
  }
};
