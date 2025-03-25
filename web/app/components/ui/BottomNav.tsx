"use client"

import { Apple, Home, Pizza, ShoppingCart, User2, Workflow } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BottomNav() {

  const route = useRouter()

    return (
      <div className=" fixed bottom-0 shadow-xl left-0 flex justify-around w-full bg-white text-black ">
        <button onClick={()=>route.push("/")} className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <Home />
          <p className=" text-xs">Accueil</p>
        </button>
        <button onClick={()=>route.push("/plat")} className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <Pizza />
          <p className=" text-xs">plats</p>
        </button>
        <button className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <Workflow />
          <p className=" text-xs">parametre</p>
        </button>
        <button className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <User2 />
          <p className=" text-xs">Profil</p>
        </button>
      </div>
    )
  }