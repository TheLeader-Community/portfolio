"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Card({ img, asPromo = false, nom, prix, href }: {
    img: string, asPromo?: boolean, nom: string, prix: number, href:string
}) {

    const lenght = nom.length 

    const route = useRouter()
    return (
        <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className=" relative rounded-xl h-52 shadow p-1 flex flex-col justify-between">
            {asPromo && <div className=" absolute bg-emerald-500 rounded-full inline p-1 text-xs m-1 px-5 text-white font-bold">Promo</div>}
            <div className=" ">
                <Image src={img} alt="" className=" rounded-xl w-52 h-32 object-cover" width={100} height={100} />
                <h1 className="  font-bold">{lenght > 15 ? nom.substring(0,15) + "..." : nom}</h1>
                <p className=" text-sm text-zinc-500">
                    {prix}FCFA
                </p>
            </div>
            <button onClick={()=>route.push(href)} className=" self-end  mt-2  border border-emerald-500 w-full rounded-box bg-emerald-500 text-white p-2 h-8 text-sm">Commander</button>
        </motion.div>
    )
}
