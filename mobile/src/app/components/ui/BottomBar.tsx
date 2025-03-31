import { Cog, EqualApproximately, Home, View } from "lucide-react-native";
import CardIcon from "./cardIcon";

export default function BottomBar() {
    return (
      <View className=' fixed p-2 bottom-0 flex-row gap-2 items-center justify-center w-full bg-blue-700/30 backdrop-blur-xl'>
        <View className=' w-32'>
          <CardIcon icon={<Cog />} style='bg-white/5'>parametre</CardIcon>
        </View>
        <View className=' w-32'>
          <CardIcon icon={<Home />} style='bg-white/5'>receive</CardIcon>
        </View>
        <View className=' w-32'>
          <CardIcon icon={<EqualApproximately />} style='bg-white/5'>overflow</CardIcon>
        </View>
      </View>
    )
  }