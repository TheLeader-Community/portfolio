"use client"

import Header from "@/app/components/ui/Header"
import { div } from "framer-motion/client"
import { Camera, ImageIcon, Verified } from "lucide-react"
import Image from "next/image"
import Form from "next/Form"
import { useRef, useState } from "react"
import gsap from "gsap"
import { redirect } from "next/navigation"


export default function Page() {

    //cette state sera utile si le fetch c'est bien passé
    const [asFinish, setasFinish] = useState(false)
    //pour le message qui vas apparaitre
    const message = useRef(null)

    const [nom, setNom] = useState("")
    const [prix, setPrix] = useState("")

    const [image, setImage] = useState("")
    const [file, setFile] = useState<File | undefined | any>()

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.files?.[0]
        setFile(value)
        if (value) {
            const preview = URL.createObjectURL(value)
            setImage(preview)

        }
    }


    const handleSubmit = async (e: any) => {

        e.preventDefault()

        const data = new FormData()
        data.set("file", file)
        data.set("nom", nom)
        data.set("prix", prix)

        const req = await fetch("/api/plat", {
            method: "POST",
            body: data
        })

        const response = await req.json()
        console.log(response?.message)
        console.log(response?.ok)
        setasFinish(true)

        if(response?.ok) {
            redirect("/plat")
        }

    }

    return (
        <>
            <Header returnbutton />
            <div className=" h-full bg-white w-full p-5 py-20 text-black">
                {asFinish && <div ref={message} className=" absolute  z-20 bg-emerald-500 top-20 right-5  p-5 text-white rounded-xl text-center">
                    <div className=" flex flex-col items-center">
                        <Verified />
                        <span>Votre plat à été ajouter avec success</span>
                    </div>
                </div>}
                <div className=" text-center">
                    <h1 className=" font-bold text-2xl">Ajouter un plat</h1>
                    <p className=" text-zinc-600 mt-2">
                        veuillez remplire les informations suivantes pour composer votre plat
                    </p>
                </div>
                <div className=" flex flex-col items-center mt-5">
                    {!image && <div className=" relative border border-black rounded-full size-32 flex justify-center items-center">
                        <ImageIcon size={50} amplitude={2} />
                        <ChangeFile forElement="file" />
                    </div>}
                    {image && <div className=" relative border border-black rounded-full size-32 flex justify-center items-center">
                        <Image src={image} alt="" width={250} height={250} className=" relative border border-black rounded-full size-32 flex justify-center items-center"></Image>
                        <ChangeFile forElement="file" />
                    </div>}
                    <span>Choisissez une image pour le plat</span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="flex p-2 mt-5 flex-col gap-5">
                    <input type="file" id="file" onChange={handleChangeFile} className=" hidden" name="file" />
                    <input type="text" name="nom" placeholder="le nom du plat" className=" border border-black rounded-full p-2" value={nom} onChange={(e) => setNom(e.target.value)} />
                    <input type="text" name="prix" placeholder="le prix du plat" className=" border border-black rounded-full p-2" value={prix} onChange={(e) => setPrix(e.target.value)} />
                    <input type="submit" className=" bg-emerald-500 w-full mt-10 rounded-full p-3 text-white" />
                </form>

            </div>
        </>
    )
}

function ChangeFile({ forElement }: { forElement: string }) {
    return (
        <label htmlFor={forElement} className=" absolute bottom-0 right-0 bg-emerald-500 rounded-full size-12 flex justify-center items-center text-white">
            <Camera />
        </label>
    )
}