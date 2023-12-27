import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest){
    const reqBody = await request.json()
    const {username, password} = reqBody
    
    let response = NextResponse.json({
        status: 200,
        message: "recieved request"
    })//type infereced
    return response
    
}