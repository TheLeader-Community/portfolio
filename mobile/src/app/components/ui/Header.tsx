import { Scan, Search, User2, View } from "lucide-react-native";
import IconButton from "./IconButton";

export function Header() {
  return (
    <View className=' border-b border-white/10 flex-row items-center justify-between p-2 pt-5 gap-5'>
      <View className=' flex-row gap-2'>
        <IconButton icon={<User2 />} />
      </View>
      <View className=' flex-row gap-3 text-white'>
        <IconButton icon={<Scan />} />
        <IconButton icon={<Search />} />
      </View>
    </View>
  )
}