import { Text, TouchableOpacity } from "react-native";

export default function CardSection({ icon, children }: { icon: any, children: string }) {
  return (
    <TouchableOpacity className=' items-center text-white flex-row p-5 gap-3 rounded-lg bg-gradient-to-r from-white/20 via-white/5 to-white/10'>
      {icon}
      <Text className=' text-white'>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
