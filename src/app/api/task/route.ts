import { NextResponse } from "next/server"
// import prisma from "../../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../lib/prisma"

export async function GET(request:Request ) {
 const task = await prisma.task.findMany()
 return NextResponse.json(task)
}

export async function POST(request:Request) {
  try {
    const json = await request.json()

    const task = await prisma.task.create({
      data: json
    })

    return new NextResponse(JSON.stringify(task), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any){
    if(error.code === "P2002"){
      return new NextResponse("This task already exist", {
        status: 409,
      })
    }
    return new NextResponse(error.message, { status: 500  })
  }
}

