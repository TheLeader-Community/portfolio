import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    const data = await prisma.user.findMany()



    return NextResponse.json({message: "voici toutes les données ", data})
}