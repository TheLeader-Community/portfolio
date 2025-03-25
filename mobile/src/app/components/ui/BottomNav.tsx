import { Home, ShoppingCart, User2, Workflow } from "lucide-react-native";
import { Text, View } from "react-native";


export default function BottomNav() {
    return (
      <View className=" fixed bottom-0 left-0 flex justify-around w-full bg-white text-black ">
        <View className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <Home />
          <Text className=" text-xs">Accueil</Text>
        </View>
        <View className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <ShoppingCart />
          <Text className=" text-xs">Panier</Text>
        </View>
        <View className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <Workflow />
          <Text className=" text-xs">parametre</Text>
        </View>
        <View className=" flex flex-col gap-1 items-center p-2 active:text-emerald-400">
          <User2 />
          <Text className=" text-xs">Profil</Text>
        </View>
      </View>
    )
  }