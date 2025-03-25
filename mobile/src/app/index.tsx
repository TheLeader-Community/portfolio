import {View, Text} from "react-native"

import { ArrowRight } from "lucide-react-native"
import Header from "./components/ui/Header";
import SearchBar from "./components/form/SearchBar";
import PresentationCard from "./components/ui/Presentationcard";
import Card from "./components/ui/Card";
import CategorieListe from "./components/data/categorieListe";

const index = () => {
  return (
    <View className=" w-full  bg-zinc-100 text-black pb-24">
      <Header />
      <View className=" Text-5 lg:px-32 mt-12 px-3">
        <SearchBar />
      </View>
      <View className=" px-3 lg:px-20">
        <PresentationCard prix={5000} composition={["Burger", "Frittes", "Coca"]} img="/img/food/pexels-robinstickel-70497.jpg" >
          la saveur du midi le fast food, retrouver cela à pas prix chez FoodApp
        </PresentationCard>
      </View>
      <CategorieListe />
      <View className=" Text-5 flex justify-between">
        <Text className=" text-xl font-semibold">Recommander</Text>
        <Text className=" flex text-emerald-500">voir plus <ArrowRight></ArrowRight> </Text>
      </View>
      <View className=" grid grid-cols-2 w-full gap-1 px-3">
        <Card img="asset/img/food/bg1.jpg" nom="double cheaz" prix="3500" >
          extremement délicieux surtout accopagne de john doe
        </Card>
        <Card img="asset/img/food/bg2.jpg" nom="pizza" prix="2500" />
        <Card img="asset/img/food/bg3.jpg" asPromo nom="blua boy" prix="11000" />
        <Card img="asset/img/food/bg5.jpg" nom="truc chose" prix="5000" />
      </View>
      <Text className=" text-xs text-zinc-400 text-center mt-5">
        copyright  by community | The Leader
      </Text>
    </View>
  );
};

export default index;
