// export async function GET(request: Request) {
//   return new Response("hello from route", {
//     status: 200,
//   })

type Data = {
  message: string,
  method: string
}

import { NextResponse } from "next/server"


export async function GET(request: Request) {
  return NextResponse.json({
    message: 'Hello from get',
    // status: 200
    method: request.method
  })
}


export async function POST(request: Request) {
  return new Response("hello from POST", {
    status: 201,
  })
}