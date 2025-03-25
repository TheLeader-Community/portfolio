"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReturnBtn() {

    const route = useRouter()

    const handleClick =()=>{
        route.back()
    }

    return (
        <div onClick={handleClick}>
            <ArrowLeft></ArrowLeft>
        </div>
    )
}