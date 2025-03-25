import { uploadFile } from "@/app/functions/uploadFile";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.plat.findMany()

    if (data)
        return NextResponse.json({ message: "toutes les données du model message", data }, { status: 200 })

    return NextResponse.json({ message: "Erreur", data }, { status: 500 })

}

export async function POST(req: NextRequest) {

    const data = await req.formData()

    const nom = data.get("nom") as string
    const prix = Number(data.get("prix") as string)
    const file = data.get("file") as File
    const img = Date.now().toString().trim()+file.name.trim()

    const upload = await uploadFile(file, "plat", img)
    if (upload) {
        console.log("l'upload à été effecter avec success")
    }

    const request = await prisma.plat.create({
        data: {
            nom,
            img,
            prix
        }
    })

    if (request && upload) {
        return NextResponse.json({ message: "donnée enregisrer avec success", data: request, ok:true }, { status: 200 })
    }

    return NextResponse.json({ message: "donnée non enregistrer ", data: request }, { status: 400 })

}