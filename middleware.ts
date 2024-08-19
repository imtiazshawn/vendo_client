import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import axios from 'axios';

import { baseURL } from './src/utils/api/baseUrl';
const VERIFY_TOKEN_URL = `${baseURL}/api/admin/auth/verify-token`;

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (request.nextUrl.pathname === '/admin/login') {
    if (token) {
      try {
        const response = await axios.get(VERIFY_TOKEN_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200 && response.data.valid) {
          console.log('Already authenticated, redirecting to dashboard');
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const response = await axios.get(VERIFY_TOKEN_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200 && response.data.valid) {
      console.log('Token verified successfully:', response.data.payload);
      return NextResponse.next();
    } else {
      console.error('Token verification failed:', response.data);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
