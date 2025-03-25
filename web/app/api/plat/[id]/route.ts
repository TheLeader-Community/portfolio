import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { clearScreenDown } from "readline";

export async function GET(req:NextRequest,{params}:{params :Promise<{id: string}>}) {

    const id = (await params).id

    const data = await prisma.plat.findUnique({
        where:{
          id: id
        }
    })

    if(data)
    return NextResponse.json({message: `voici votre id ${id}`, data})

  return NextResponse.json({message: `aucune donnée ne correspond`, erreur:true}, {status: 404})
}