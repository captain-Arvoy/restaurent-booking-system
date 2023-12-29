import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostUrl:string = new URL('/signup',request.url).origin
    return NextResponse.rewrite(new URL('/signup',hostUrl))
}

export const config = {
    matcher: [
        '/:path*'
    ]
}