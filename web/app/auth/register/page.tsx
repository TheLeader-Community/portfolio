"use client"

import Header from "@/app/components/ui/Header"
import {Camera, ImageIcon, User2, Verified } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import { redirect } from "next/navigation"
import { ChangeFile } from "@/app/components/form/ChangeFile"


export default function Page() {

  

    return (
        <>
            {/* <Header returnbutton /> */}
            <div className=" h-screen flex flex-col items-center justify-center bg-white w-full p-5 py-20 text-black">
               
                <div className=" text-center">
                    <h1 className=" font-bold text-3xl">Inscription</h1>
                    {/* <p className=" text-zinc-600 mt-2">
                        veuillez remplire les informations suivantes pour composer votre plat
                    </p> */}
                </div>
                <div className=" flex flex-col items-center mt-5">
                    <div className=" relative border border-black rounded-full size-32 flex justify-center items-center">
                        <User2 size={50} amplitude={2} />
                        <ChangeFile forElement="file" icon={<Camera/>} />
                    </div>
                    
                    <span>Choisissez une image de profile</span>
                </div>
                <form  className="flex w-full p-2 mt-5 flex-col gap-5">
                    <input type="file" id="file" className=" hidden" name="file" />
                    <input type="text" name="nom" placeholder="le nom" className=" border border-black rounded-full p-2" />
                    <input type="text" name="prix" placeholder="votre email" className=" border border-black rounded-full p-2"  />
                    <input type="submit" className=" bg-emerald-500 w-full mt-10 rounded-full p-3 text-white" />
                </form>

            </div>
        </>
    )
}
