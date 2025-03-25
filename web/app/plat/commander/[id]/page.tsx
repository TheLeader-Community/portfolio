

import Header from "@/app/components/ui/Header"
import { prisma } from "@/lib/prisma"
import Image from "next/image"


export default async function Page({params}:{params:Promise<{id:string}>}) {

    const id =  (await params).id

    const data = await prisma.plat.findUnique({
        where:{
            id
        }
    })

    const nom = data?.nom
    const prix = data?.prix
    const img = data?.img

    return (
        <>
            <Header returnbutton />
            <div className=" h-screen flex justify-center items-center bg-white w-full p-5 text-black">
               
                <div className=" text-center">
                    <Image src={`/uploads/plat/${img}`} alt="" width={250} height={250} className=" w-full h-60 object-cover rounded-xl"/>
                    <h1 className=" font-bold text-2xl">Commander "{nom}" </h1>
                    <p className=" text-zinc-600 mt-2">
                        cet plat vous coutera {prix} FCFA
                    </p>
                    <button className="bg-emerald-500 p-2 mt-5 rounded-full w-full text-white">valider la commande</button>
                    <button className="bg-zinc-200 text-error p-2 mt-5 rounded-full w-full ">Annuler la commande</button>
                </div>
               
             
            </div>
        </>
    )
}
