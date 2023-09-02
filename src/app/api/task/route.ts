import { NextResponse } from "next/server"
// import prisma from "../../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export async function GET(request:Request, context: any ) {
  console.log(context.params)
  return NextResponse.json({
    message: 'Hello from Get all task',
  },{
    status: 200
  })
}

export async function POST(request: Request, context: any){
  console.log(context.params)
  return NextResponse.json({
    message: 'Hello from POST all task',
  },{
    status: 200
  })
}


// export async function POST(request:NextApiRequest, response: NextApiResponse) {
//   const { title, description } = request.body
  
//   try {
//     await prisma?.task.create({
//       data: {
//         title,
//         description
//       }
//     })
//     response.status(200).json({message: 'Task created'})
//   } catch (error) {
//     console.log('Bad Request')
//   }
// }