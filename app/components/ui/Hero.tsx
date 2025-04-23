"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


export default function Hero() {

    return (
        <div className=" flex h-full w-full bg-background pt-20 lg:pt-0 text-foreground">

            <div className=" flex gap-10 h-full flex-col-reverse md:flex-row items-center  w-full px-10 md:px-0 justify-center">
                <div className='max-w-md '>
                    <h1 className='text-4xl mb-5  font-extrabold mx-auto md:text-5xl'>
                        Bienvenue<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-900'> sur Le site du Leader</span>
                    </h1>
                    <p className='mb-5'>
                        le site des leaders d&lsquo;hier d&lsquo;aujourd&lsquo;hui et de demain, faisant partie de ceux qui inspirent
                        qui laissent une empreinte.
                    </p>
                    <Button className=" bg-blue-500 text-white">Explorer la platforme</Button>
                </div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mockup-browser bg-background  border h-80 lg:w-5/12 ">
                    <div className="mockup-browser-toolbar bg-background">
                        <div className="input border text-white  ">https://community.com</div>
                    </div>
                    <div className="flex justify-center px-4 py-16 border-t bg-no-repeat bg-cover h-full" >
                        <div className=" flex flex-col w-full gap-5">
                            <div className=" flex gap-5 items-center w-full">
                                <div className="skeleton w-52 h-32"></div>
                                <div className=" w-full flex flex-col items-center gap-5">
                                    <div className="skeleton w-full h-10"></div>
                                    <div className="skeleton w-full h-10"></div>
                                </div>
                            </div>
                            <div className="skeleton w-80 h-80"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

// B1 RUE AISA POTO POTO AVENUE DE FRANCE LERRTE DE BUS MUCODO

