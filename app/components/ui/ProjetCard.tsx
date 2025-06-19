"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


type Props = {
    title: string,
    children?: string,
    imgMockup?: string,
    isVideo?: boolean,
    linkName?: string
}

export default function ProjetCard({ title, children, imgMockup, isVideo = false, linkName }: Props) {
    return (
        <Card className=' lg:p-5 bg-background w-full'>
            <div className=" flex gap-10 h-full flex-col-reverse md:flex-row md:items-center   w-full px-2 md:px-0 justify-between">
                <div className='max-w-md text-start '>
                    <h1 className='text-3xl md:text-4xl mb-5  font-extrabold mx-auto '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-200 to-blue-900'> {title}</span>
                    </h1>
                    <p className='mb-5'>
                        {children}
                    </p>
                    <Button className=" bg-blue-500 text-white">Explorer le projet</Button>
                </div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mockup-browser bg-background  border h-80 ">
                    <div className="mockup-browser-toolbar bg-background">
                        <div className="input border text-white  ">https://{linkName}</div>
                    </div>
                    <div className="flex justify-center w-full p-0 border-t bg-no-repeat bg-cover h-full" >
                        {!imgMockup
                            ?
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
                            : (isVideo) ? <div className=' w-full h-full'><video src={imgMockup} className='  w-full h-full md:object-cover' muted autoPlay loop></video></div>
                                : <Image src={imgMockup} alt={"image"} width={500} height={500} className=' w-full h-full object-cover' />
                        }
                    </div>
                </motion.div>
            </div>
            <div className='w-full max-w-5xl mx-auto'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Image
                            src="/taf/film-7.png"
                            className="h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/taf/film-1.png"
                            className="h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/taf/film-4.png"
                            className="h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </Card>
    )
}
