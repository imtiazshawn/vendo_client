import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { Algorithm } from 'jsonwebtoken';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY!;
const ALGORITHM = process.env.NEXT_PUBLIC_ALGORITHM! as Algorithm;
console.log('Here is Middleware');

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY, { algorithms: [ALGORITHM] });

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
