import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Replace with your actual authentication logic
  const tokenCookies = request.cookies.get('token');
  const isAuthenticated = !tokenCookies;
  // Define which paths should be protected
  const protectedRoutes = ['/estadisticas', '/tutorial', '/terapia', '/salud', '/registros', '/perfil'];
  const { pathname } = request.nextUrl

  if (!isAuthenticated && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/cuenta/ingreso', request.url))
  } else {
    // Allow the request to continue if authenticated
    return NextResponse.next();
  }
}

// Apply middleware only to protected routes
export const config = {
  matcher: ['/estadisticas/*', '/tutorial/*', '/terapia/*', '/salud/*', '/registros/*', '/perfil/*'],
}