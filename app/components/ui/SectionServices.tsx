"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import TitleBottomBar from "./TitleBottomBar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ListeCardService from "./ListeCardService"



export default function SectionServices() {

 
    return (
        <>
            <ListeCardService/>
                <div className=" lg:p-20">
                    <Card className=" bg-background">
                        <TitleBottomBar>
                            Qui sommes nous ?
                        </TitleBottomBar>
                        <CardContent className=" flex flex-col gap-10 text-center md:text-start">
                            <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                                <div className=" space-y-5  text-service-1">
                                    <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Une platforme d&lsquo;orientation scolaire</h1>
                                    <p className=" text-sm text-slate-400">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                    </p>
                                    <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                                </div>
                                <Image src={"/illustrations/graduation hats-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                            </Card>
                            <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row-reverse items-center gap-10 mt-10">
                                <div className=" space-y-5  text-service-1">
                                    <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Une platforme d&lsquo;orientation aux métiers</h1>
                                    <p className=" text-sm text-slate-400">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                    </p>
                                    <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                                </div>
                                <Image src={"/illustrations/Company-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                            </Card>
                            <div className=" flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                                <div className=" space-y-5">
                                    <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Nous vous accompagnons dans l&lsquo;informatisation de vos startups & entreprises</h1>
                                    <p className=" text-sm text-slate-400">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                    </p>
                                    <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                                </div>
                                <Image src={"/img/comment3.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                            </div>

                            <div className=" flex flex-col-reverse md:flex-row-reverse  items-center gap-10 mt-10">
                                <div className=" space-y-5">
                                    <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Nous vous accompagnons dans l&lsquo;informatisation de vos startups & entreprises</h1>

                                    <p className=" text-sm text-slate-400">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                    </p>
                                    <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                                </div>
                                <Image src={"/img/comment1.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                            </div>
                            <div className=" flex flex-col-reverse md:flex-row-reverse  items-center gap-10 mt-10">
                                <div className=" space-y-5">
                                    <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Nous vous accompagnons dans l&lsquo;informatisation de vos startups & entreprises</h1>

                                    <p className=" text-sm text-slate-400">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                    </p>
                                    <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                                </div>
                                <Image src={"/img/comment2.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </>
            )
}

