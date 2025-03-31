"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function PresentationCard({ img, composition, prix, children }: { img: string, prix: number, composition?: string[], children: string }) {

  
  return (
    <motion.div initial={{x:40}} animate={{x:0}}  style={{ backgroundImage: `url(${img})` }} className=" relative flex justify-center w-full  h-72 lg:h-80 rounded-xl bg-cover  bg-no-repeat">
      <div className="  flex justify-center items-center text-white absolute bg-gradient-to-tr from-black via-black/85  to-transparent w-full h-full rounded-xl">
        <div className=" p-5 lg:p-32 pb-0">
          <div className=" flex text-xs lg:text-3xl gap-3">
            {
              composition?.map((element: string, index: number) => (
                <span key={index}>{element}</span>
              ))
            }
          </div>
          <h1 className=" text-lg mt-2 lg:text-4xl font-semibold">
            {children}
          </h1>
          <div className=" flex flex-col mt-5 gap-2">
            <div className=" flex justify-between">
              <h1 className=" text-xl lg:text-4xl font-extrabold">{prix} <span>FCFA</span></h1>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <button className=" p-1 bg-emerald-500 rounded-full mt-5 float-end w-52">Acheter</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}