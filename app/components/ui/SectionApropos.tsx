"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import SectionPortfolio from "./SectionPortfolio";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";
import Bot from "../bot/Bot";


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


  const [BotActive, setBotActive] = useState(false)


  const HeroPortfolioImg = useRef(null)
  const HeroPortfolioText = useRef(null)
  const portfolio_title_ref = useRef(null)
  const portfolio_subtitle_ref = useRef(null)
  const portfolio_skilllist_ref = useRef(null)


  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin)
    gsap.registerPlugin(TextPlugin)


    const tl = gsap.timeline()
    setBotActive(false)
    tl.to(HeroPortfolioImg.current, {
      x: 0,
      opacity: 1,
      rotate: 0,
      yoyo: true,
    }).to(portfolio_title_ref.current, {
      x: 0,
      opacity: 1
    }).to(portfolio_subtitle_ref.current, {
      x: 0,
      opacity: 1
    }).to(portfolio_skilllist_ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.1
    }).to(".skillbox", {
      opacity: 1,
      scale: 1,
      x: 0,
      stagger: 0.3,
      duration: 0.5
    }).to(".boxShadowAfterImage", {
      rotate: 360,
    }).to(".boxShadowAfterImage", {
      rotate: 0,
      // onComplete: function () {

      //   const tl2 = gsap.timeline()

      //   tl2.to(".Bot", {
      //     yPercent: 0,
      //   }).to(".Bot", {
      //     width: "calc(var(--spacing) * 80) ",
      //     height: 230,
      //     borderRadius: "1rem"
      //   }).
      //     to(".Bot-head", {
      //       opacity: 0,
      //       display:"none"
      //     }).
      //     to(".Bot-content", {
      //       opacity: 1,
      //       display: "block",
      //     })
      //   setBotActive(true)
      // }
    })

  }, [])

  return (
    <div className="  text-foreground text-center pt-20 overflow-x-hidden ">
      <Card className="  bg-background">
        <div className=' text-foreground'>
          <section className=' mt-5 mx-auto flex flex-col-reverse justify-center  items-center max-w-screen-xl pb-12 px-2 lg:flex-row md:px-10'>
            <div ref={HeroPortfolioText} className='space-y-4  flex-1 sm:text-center lg:text-left'>
              <h1 ref={portfolio_title_ref} className=' -translate-x-96 opacity-0 font-black text-4xl py-2 md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4F46E5]'>
                Chadrack Massamba  Développeur & entrepreneur
              </h1>
              <p ref={portfolio_subtitle_ref} className=' -translate-x-96 opacity-0 max-w-xl text-zinc-300 leading-relaxed sm:mx-auto lg:ml-0'>
                entrepreneur passionné par la
                technologie, je développe des solutions
                web et mobiles performantes.  je possède une expertise solide
                pour transformer des idées en projets
                concrets, aidant les entreprises à se
                digitaliser et à innover grâce à des
                technologies modernes.
              </p>
              <div ref={portfolio_skilllist_ref} className=" -translate-x-96 opacity-0 grid grid-cols-4 md:flex md:flex-wrap">
                {
                  ListeSkillStack.map((el: string, index: number) => (
                    <div key={index} className=" skillbox -translate-x-10 scale-0 opacity-0 rounded-2xl bg-transparent p-3 shadow-2xl">
                      <Image src={el} width={500} height={500} alt="" className=" transition-all object-cover size-16 md:size-24 shadow-2xl shadow-blue-500   rounded-full"></Image>
                    </div>
                  ))
                }
              </div>
              <div className='pt-10 items-center justify-center space-y-3 space-x-6 sm:space-y-0 sm:flex lg:justify-start'>
                <Button variant={"outline"} className=" rounded-full hidden md:flex  p-5">
                  visiter le portfolio
                </Button>
                <Button className=" bg-blue-500 rounded-full text-white  p-5">
                  Explorer mon blog <ArrowRight></ArrowRight>
                </Button>
              </div>
            </div>
            <div ref={HeroPortfolioImg} className="flex-1 opacity-0 translate-x-96 rotate-180  flex-col items-center  justify-center md:justify-start gap-3 lg:mt-0 lg:ml-3 p-2">
              <div className=' pb-20 relative  p-2 flex flex-col justify-center items-center text-center lg:mt-0 lg:ml-3'>
                <div className=" boxShadowAfterImage absolute size-72 md:size-96 p-5 rounded-full border-0 shadow-2xl shadow-blue-500 border-b-transparent border-t-transparent bg-transparent border-blue-500 "></div>
                <Image alt="" width={500} height={500} src='/profiles/chadrack.png' className=' size-72 md:size-96 rounded-full object-cover lg:mx-auto' />
              </div>
            </div>
          </section>
        </div>
        <SectionPortfolio />
      </Card>
      <div>
      </div>
      <Bot isActive={BotActive} onCancel={() => { }} onSubmit={() => { }}>
        vous etes actuellement sur le portfolio de Massamba Kimnou que voulez vous voir ?
      </Bot>
    </div >


  )
}
