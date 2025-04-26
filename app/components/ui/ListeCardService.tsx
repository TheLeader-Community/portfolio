"use client"

import { Computer, Laptop2, Smartphone, Users } from "lucide-react";
import { CardService } from "./CardService";
import { useEffect } from "react";
import gsap from "gsap"

export default function ListeCardService() {


    useEffect(() => {

        gsap.fromTo(".box", {yPercent: 200},{yPercent:0, stagger:0.1})

    },)

    return (
        <div className=" bg-background grid md:mt-14 grid-cols-2 p-5 lg:p-2 md:grid-cols-4 gap-5 lg:gap-5  lg:px-20">
            <div className="box">
                <CardService title={"développement web"} icon={<Laptop2 size={40} />} />
            </div>
            <div className="box">
                <CardService title={"développement mobile"} icon={<Smartphone size={40} />} />
            </div>
            <div className="box">
                <CardService title={"développement cross platform"} icon={<Computer size={40} />} />
            </div>
            <div className="box">
                <CardService title={"marketing Digital"} icon={<Users size={40} />} />
            </div>
        </div>
    )
}
