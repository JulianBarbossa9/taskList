
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(
  request:Request, 
  { params } : { params: {id : string }}) {
  
    const id = params.id
    const task = await prisma.task.findUnique({
      where: {
        id,
      }
    })
    if (!task){
      return new NextResponse("The task with that id doesn't exist", { status: 404})
    }
    return NextResponse.json(task)
}


export async function PATCH(
  request:Request, 
  { params } : { params: { id: string}}) {
  
    const id = params.id
    let json = await request.json()

    const updateTask = await prisma.task.update({
      where: {id},
      data: json,
    })

    if(!updateTask) {
      return new NextResponse("The task with that id doesn't exist", { status: 404})
    }

    return NextResponse.json(updateTask, { status: 200})
}

export async function DELETE(
  request:Request, 
  { params } : { params: {id :string}}) {
  
    console.log(params)
    try {
      const id = params.id
      await prisma.task.delete({
        where: { id }
      })
      return new NextResponse(null, { status: 204 })
      
    } catch (error: any) {
      if (error.code === "P2025"){
        return new NextResponse("The task with that id doesn't exist", { status: 404})
      }
      return new NextResponse(error.message, { status: 500 })
    }
}

