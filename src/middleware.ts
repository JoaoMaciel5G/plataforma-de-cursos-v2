import { redirect } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token")?.value

  if(!cookie){
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher : [
    "/home",
    "/cart",
    "/contact",
  ]
}