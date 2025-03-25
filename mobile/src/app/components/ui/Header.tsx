import { Bell, ShoppingBag } from "lucide-react-native";
import { Image, Text, View } from "react-native";


export default function Header({name = "Massamba Chadrack", imgUser = "/img/food/bg1.jpg" }:{name?:string, imgUser?:string}) {
  return (
    <View className="flex fixed top-0 left-0 bg-white z-10 w-full px-2 items-center justify-between text-black ">
      <View className="p-2 flex jus gap-2 items-center">
        <Image source={require("assets/img/food/bg1.jpg")} alt="" className=" size-10 rounded-full" width={100} height={100} />
        <View className=" text-xs">
          <Text className=" text-zinc-500">Bienvenue !</Text>
          <Text className=" font-bold text-sm">{name}</Text>
        </View>
      </View>
      <View className=" flex gap-5">
        <ShoppingBag size={20} />
        <Bell size={20} />
      </View>
    </View>
  )
}
