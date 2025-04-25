import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Computer, Laptop2, Smartphone, Users } from "lucide-react"
import { ReactNode } from "react"
import TitleBottomBar from "./TitleBottomBar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SectionServices() {
    return (
        <>
            <div className=" bg-background grid md:mt-14 grid-cols-2 p-5 lg:p-2 md:grid-cols-4 gap-5 lg:gap-3  lg:px-20">
                <CardService title={"développement web"} icon={<Laptop2 size={40} />} />
                <CardService title={"développement mobile"} icon={<Smartphone size={40} />} />
                <CardService title={"développement cross platform"} icon={<Computer size={40} />} />
                <CardService title={"marketing Digital"} icon={<Users size={40} />} />
            </div>

            <div className=" lg:p-20">
                <Card className=" bg-background">
                    <TitleBottomBar>
                        Qui sommes nous ?
                    </TitleBottomBar>
                    <CardContent className=" flex flex-col gap-10 text-center md:text-start">
                        <div className=" flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                            <div className=" space-y-5">
                                <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-300 to-blue-900">Nous vous accompagnons dans l'informatisation de vos startups & entreprises</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/img/dashboard.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                        </div>
                        <div className=" flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                            <div className=" space-y-5">
                                <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-300 to-blue-900">Nous vous accompagnons dans l'informatisation de vos startups & entreprises</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/img/comment3.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                        </div>

                        <div className=" flex flex-col-reverse md:flex-row-reverse  items-center gap-10 mt-10">
                            <div className=" space-y-5">
                                <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-300 to-blue-900">Nous vous accompagnons dans l'informatisation de vos startups & entreprises</h1>

                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/img/comment1.png"} alt="" width={"500"} height={"500"} className="w-full" ></Image>
                        </div>
                        <div className=" flex flex-col-reverse md:flex-row-reverse  items-center gap-10 mt-10">
                            <div className=" space-y-5">
                                <h1 className=" text-3xl  md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-300 to-blue-900">Nous vous accompagnons dans l'informatisation de vos startups & entreprises</h1>

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


function CardService({ icon, title, subtitle }: { icon: ReactNode, title: string, subtitle?: string }) {
    return (
        <Card className="skeleton text-center text-foreground w-full">
            <CardHeader>
                <CardTitle className=" p-2 flex flex-col justify-center items-center">
                    {icon}
                    <h1 className=" font-bold text-sm">
                        {title}
                    </h1>
                </CardTitle>
                <CardContent>
                    <p className=" text-xs">
                        {subtitle}
                    </p>
                </CardContent>
            </CardHeader>
        </Card>
    )
}