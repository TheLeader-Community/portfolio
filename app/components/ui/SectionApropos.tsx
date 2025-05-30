import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import SectionPortfolio from "./SectionPortfolio";
import { ArrowRight } from "lucide-react";


export default function SectionApropos() {


  const ListeSkillStack: string[] = [
    "/icons/typescript-2.png",
    "/icons/react.jpg",
    "/icons/tailwindcss.png",
    "/icons/next-2.png",
    "/icons/flutter-2.png",
    "/icons/prisma.png",
    "/icons/postgresql.jpg",
    "/icons/nodejs-2.png",
  ]

  return (
    <div className="  text-foreground text-center pt-20 overflow-x-hidden ">
      <Card className="  bg-background">
        <div className=' text-foreground'>
          <section className=' mt-5 mx-auto flex flex-col-reverse items-center max-w-screen-xl pb-12 px-2 lg:flex-row md:px-8'>
            <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
              <h1 className=' font-black text-4xl py-2 md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4F46E5]'>
                Développeur & Entrepreneur digital
              </h1>
              <p className=' max-w-xl text-zinc-300 leading-relaxed sm:mx-auto lg:ml-0'>
                entrepreneur passionné par la
                technologie, je développe des solutions
                web et mobiles performantes.  je possède une expertise solide
                pour transformer des idées en projets
                concrets, aidant les entreprises à se
                digitaliser et à innover grâce à des
                technologies modernes.
              </p>
              <div className=" grid grid-cols-3 md:flex md:flex-wrap">
                {
                  ListeSkillStack.map((el: string, index: number) => (
                    <div key={index} className=" rounded-2xl bg-transparent p-3 shadow-2xl">
                      <Image src={el} width={500} height={500} alt="" className=" object-cover size-24 rounded-field"></Image>
                    </div>
                  ))
                }

              </div>
              <div className='pt-10 items-center justify-center space-y-3 space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
                <Button variant={"outline"} className="  rounded-lg p-5">
                  visiter le portfolio
                </Button>
                <Button className=" bg-blue-500 text-white rounded-lg p-5">
                  Explorer mon blog <ArrowRight></ArrowRight>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex-col items-center  justify-center md:justify-start gap-3 lg:mt-0 lg:ml-3 p-2">
              <div className='  p-2 flex flex-col justify-center items-center text-center lg:mt-0 lg:ml-3'>
                <Image alt="" width={500} height={500} src='/icons/image.jpg' className=' size-72 md:size-96 rounded-full object-cover lg:mx-auto' />
              </div>
              <Card className="bg-transparent p-2">
                <h1 className=" md:text-4xl font-light">
                  Massamba Kiminou Chadrack delmard - Espoir dev
                </h1>
              </Card>
            </div>
          </section>
        </div>
        <SectionPortfolio />
      </Card>
      <div>
      </div>
    </div>

  )
}
