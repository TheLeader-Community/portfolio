"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SectionSolde() {


    const [currentDate, setCurrentDate] = useState<Date>()

    const [seconde, setSeconde] = useState<number | undefined>(0)
    const [minute, setMinute] = useState<number | undefined>(0)
    const [heure, setHeure] = useState<number | undefined>(0)
    const [day, setDay] = useState<number | undefined>(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
            setSeconde(currentDate?.getSeconds())
            setMinute(currentDate?.getMinutes())
            setHeure(currentDate?.getHours())
            setDay(currentDate?.getDay())
        }, 1000)

        return () => clearInterval(interval);
    })


    return (
        <Card className=" bg-transparent">
            <div className=" w-full overflow-x-hidden relative p-5 md:p-20" >
                <div className=" pt-10 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5">
                    <div className=" text-4xl text-zinc-400 font-bold  flex flex-col gap-5 ">
                        <h1>le plus haut pack</h1>
                        <h1 className=" text-white">en promotion</h1>
                        <h1>pour vous</h1>
                    </div>
                    <div className=" relative ">
                        <Image src={"/img/product-sale.png"} alt="" className=" hover:scale-110 transition-all hover:rotate-12" width={500} height={500} />
                        <div className="animate-bounce absolute top-0 right-0 bg-blue-500 rounded-full size-32 flex justify-center items-center text-center">Solde de 250.000FCFA</div>
                    </div>
                    <div className="">
                        <p className=" text-white my-3">Une occasion à ne pas manqué</p>
                        <h1 className=" text-white font-bold text-3xl md:text-4xl">Le pack startup pro est en promotion </h1>
                        <div className=" flex gap-5 text-white font-bold text-4xl my-5">
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <h1>{day}</h1>
                                <p className=" text-sm text-zinc-400 font-light">jours</p>
                            </div>:
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <h1>{heure}</h1>
                                <p className=" text-sm text-zinc-400 font-light">heures</p>
                            </div>:
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <h1>{minute}</h1>
                                <p className=" text-sm text-zinc-400 font-light">Minutes</p>
                            </div>:
                            <div className=" flex flex-col gap-3 justify-center items-center">
                                <h1>{seconde}</h1>
                                <p className=" text-sm text-zinc-400 font-light">secondes</p>
                            </div>
                        </div>
                        <button className=" rounded-field p-3 bg-blue-500 my-5">Acheter maintenant</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}