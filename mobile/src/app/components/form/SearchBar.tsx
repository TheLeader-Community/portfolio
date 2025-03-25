import { Search } from "lucide-react-native";
import {Text, View} from "react-native"
export default function SearchBar() {
    return (
      <Text className=" bg-white text-zinc-400 text-sm border flex gap-2 border-zinc-400 rounded-full p-3 w-full ">
        <Search size={18}></Search>
        <View className=" w-full h-full bg-transparent" />
      </Text>
    )
  }