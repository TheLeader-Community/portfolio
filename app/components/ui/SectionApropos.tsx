import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import SectionPortfolio from "./SectionPortfolio";
import TitleBottomBar from "./TitleBottomBar";


export default function SectionApropos() {
  return (
    <div className="  text-foreground text-center pt-20  md:p-20">
      <Card className=" skeleton bg-background">
        <CardHeader className=" border-b-2 pb-3 border-background/30">
          <TitleBottomBar>Apropos de moi</TitleBottomBar>
        </CardHeader>
        <div className=' text-foreground'>
          <header className="">
            <nav className='items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6'>
              <div className=" flex justify-center items-center gap-3">
                <Image alt="" width={500} height={500} src='/icons/image.jpg' className=" size-12 rounded-full" />
                <div>
                  <h1 className=" text-lg font-bold">Espoir Dev</h1>
                </div>
              </div>
            </nav>
          </header>
          <section className=' mt-5 mx-auto flex flex-col-reverse max-w-screen-xl pb-12 px-2 items-center lg:flex-row md:px-8'>
            <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
              <h1 className=' font-bold text-3xl xl:text-5xl'>
                Développeur & Entrepreneur
                <span className='text-blue-400/85'> Digital agency</span>
              </h1>
              <p className=' max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
                Jeune entrepreneur passionné par la
                technologie, je développe des solutions
                web et mobiles performantes. Malgré
                mon âge, je possède une expertise solide
                pour transformer des idées en projets
                concrets, aidant les entreprises à se
                digitaliser et à innover grâce à des
                technologies modernes.
              </p>
              <div>
                <h1>Ma stack préferer</h1>
             
              </div>
              <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
                <Button variant={"outline"} className="  rounded-lg p-7">
                  suivant
                </Button>
                <Button className=" bg-blue-500 text-white rounded-lg p-7">
                  continuer
                </Button>
              </div>
            </div>
            <div className=' skeleton p-2 flex-1 text-center mt-7 lg:mt-0 lg:ml-3'>
              <Image alt="" width={500} height={500} src='/icons/chadeack.jpg' className='w-full h-96 object-cover rounded mx-auto lg:w-full' />
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
