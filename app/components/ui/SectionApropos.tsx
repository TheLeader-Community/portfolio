import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import SectionPortfolio from "./SectionPortfolio";
import TitleBottomBar from "./TitleBottomBar";
import { ArrowRight } from "lucide-react";


export default function SectionApropos() {
  return (
    <div className="  text-foreground text-center pt-20  lg::p-20">
      <Card className="  bg-background">
        
        <div className=' text-foreground'>
        
          <section className=' mt-5 mx-auto flex flex-col-reverse max-w-screen-xl pb-12 px-2 items-center lg:flex-row md:px-8'>
            <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
              <div className=" flex flex-col md:flex-row justify-center lg:justify-start items-center gap-3">
                <Image alt="" width={500} height={500} src='/icons/image.jpg' className=" size-12 rounded-full" />
                <div>
                  <h1 className=" text-lg font-bold">Espoir Dev</h1>
                </div>
              </div>
              <h1 className=' font-bold text-3xl py-2 md:text-5xl'>
                Développeur & Entrepreneur
                <span className='text-blue-400/85'> Digital agency</span>
              </h1>
              <p className=' max-w-xl text-zinc-300 leading-relaxed sm:mx-auto lg:ml-0'>
                Jeune entrepreneur passionné par la
                technologie, je développe des solutions
                web et mobiles performantes. Malgré
                mon âge, je possède une expertise solide
                pour transformer des idées en projets
                concrets, aidant les entreprises à se
                digitaliser et à innover grâce à des
                technologies modernes.
              </p>
              <div className='pt-10 items-center justify-center space-y-3 space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
                <Button variant={"outline"} className="  rounded-lg p-5">
                  visiter le portfolio
                </Button>
                <Button className=" bg-blue-500 text-white rounded-lg p-5">
                  Explorer mon blog <ArrowRight></ArrowRight>
                </Button>
              </div>
            </div>
            <div className='  p-2 flex-1 text-center lg:mt-0 lg:ml-3'>
              <Image alt="" width={500} height={500} src='/icons/image.jpg' className='w-full object-cover rounded-field lg:mx-auto lg:w-10/12 lg:h-full' />
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
