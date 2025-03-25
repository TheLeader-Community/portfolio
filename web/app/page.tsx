
import { ArrowRight } from "lucide-react";
import Header from "./components/ui/Header";
import SearchBar from "./components/form/SearchBar";
import PresentationCard from "./components/ui/Presentationcard";
import Card from "./components/ui/Card";
import CategorieListe from "./components/data/categorieListe";
import PlatListe from "./components/data/platListe";
import Link from "next/link";

const index = () => {
  return (
    <div className=" w-full  bg-white text-black pb-24">
      <Header />
      <div className=" p-5 lg:px-32 mt-12 px-3">
        <SearchBar />
      </div>
      <div className=" px-3 lg:px-20">
        <PresentationCard prix={5000} composition={["Burger", "Frittes", "Coca"]} img="/img/food/pexels-robinstickel-70497.jpg" >
          la saveur du midi le fast food, retrouver cela à pas prix chez FoodApp
        </PresentationCard>
      </div>
      <CategorieListe />
      <div className=" p-5 flex justify-between">
        <h1 className=" text-xl font-semibold">Recommander</h1>
        <Link href={"/plat"} className=" flex text-emerald-500">voir plus <ArrowRight></ArrowRight> </Link>
      </div>
      <PlatListe limite={6}/>
      
      <p className=" text-xs text-zinc-400 text-center mt-5">
        copyright  by community | The Leader
      </p>
    </div>
  );
};

export default index;
