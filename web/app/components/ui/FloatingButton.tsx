"use client"

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FloatinfButton({ icon, bgcolor, color, href }: {
    icon?: any, color?: string, bgcolor?: string, href:string
}) {

    const route = useRouter()
    return (
        <div onClick={()=>route.push(href)} className={` z-20 fixed bottom-20 right-5 rounded-full size-14 flex justify-center items-center ${color ?? "text-white"} ${bgcolor ?? "bg-emerald-500"}`}>
            {icon ? icon: (<Plus/>)}
        </div>
    )
}

