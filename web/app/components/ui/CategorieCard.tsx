import Image from "next/image";

export function CategorieCard({img, title, nb_resultat = 0}:{img:string, title:string, nb_resultat?:number}) {
  return (
    <div className=" relative flex flex-col justify-center items-center w-full">
      <Image src={img} alt="" className="  size-20 object-cover rounded-full" width={250} height={250} />
      <h1 className=" text-nowrap  text-sm text-black">{title}</h1>
      <div className=" top-0 flex justify-center items-center absolute text-white text-xs bg-black/50 rounded-full size-20">
        <p className="">{nb_resultat} resultats</p>
      </div>
    </div>
  )
}
