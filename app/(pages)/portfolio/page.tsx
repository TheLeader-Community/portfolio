"use client"

import Header from "@/app/components/ui/Header";
import SectionApropos from "@/app/components/ui/SectionApropos";
import { useState } from "react";


export default function Portfolio() {

    const [bg, setBg] = useState("dark")

    return (
        <div className={` ${bg} h-full`}>
            <Header setBackground={setBg} />
            <SectionApropos />
        </div>
    )
}