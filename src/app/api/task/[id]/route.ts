
import { NextResponse } from "next/server";

export async function GET(request:Request, context: any ) {
  
  console.log(context.params)
  
  return NextResponse.json({
    message: 'Hello from Get unique task',
    id: context.params
  },{
    status: 200
  })
}

//uptade unique task
export async function PUT(request:Request, context: any ) {
  console.log(context.params)
  return NextResponse.json({
    message: 'Update task PUT',
  },{
    status: 200
  })
}

export async function DELETE(request:Request, context: any ) {
  console.log(context.params)
  return NextResponse.json({
    message: 'Delete unique task ',
  },{
    status: 200
  })
}

