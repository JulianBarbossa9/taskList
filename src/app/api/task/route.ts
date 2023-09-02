import { NextResponse } from "next/server"

export async function GET(request:Request, context: any ) {
  console.log(context.params)
  return NextResponse.json({
    message: 'Hello from Get all task',
  },{
    status: 200
  })
}
