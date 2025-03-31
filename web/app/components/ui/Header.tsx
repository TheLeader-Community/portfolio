import { Bell, ShoppingBag } from "lucide-react";
import Image from "next/image";
import ReturnBtn from "./ReturnBtn";

export default function Header({ name = "Massamba Chadrack", returnbutton = false, imgUser = "/img/food/bg1.jpg" }: { name?: string, imgUser?: string, returnbutton?:boolean }) {
  return (
    <div className="flex fixed top-0 left-0 bg-white z-10 w-full px-2 items-center justify-between lg:px-10 text-black ">
      <div className="p-2 flex jus gap-2 items-center">
      {returnbutton && <ReturnBtn />}
        <Image src={imgUser} alt="" className=" size-10 rounded-full" width={100} height={100} />
        <div className=" text-xs">
          <p className=" text-zinc-500">Bienvenue !</p>
          <h3 className=" font-bold text-sm">{name}</h3>
        </div>
      </div>
      <div className=" flex gap-5">
        <ShoppingBag size={20} />
        <Bell size={20} />
      </div>
    </div>
  )
}
