"use server"

import { prisma } from "@/lib/prisma"
import Card from "../ui/Card"

export default async function PlatListe({ limite = 0 }: { limite?: number }) {

    const data = await prisma.plat.findMany()
    return (
        <div className=" h-full grid grid-cols-2 space-y-5 w-full gap-1 px-3">
            {
                data.map((element, index) => (
                    (limite == 0 || index < limite) && <Card
                        img={`/uploads/plat/${element.img}`}
                        nom={element.nom}
                        prix={element.prix}
                        key={element.id} 
                        href={`/plat/commander/${element.id}`}
                        >
                    </Card>
                ))
            }
        </div>
    )
}