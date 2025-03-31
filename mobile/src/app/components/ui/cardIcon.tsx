import { Text, TouchableOpacity } from "react-native";


export default function CardIcon({ icon, children, style }: { icon: any, children?: string, style?:string }) {
  return (
    <TouchableOpacity className={' p-2 rounded-lg bg-white/20 text-white items-center '+ style}>
      {icon}
      <Text className=' text-white'>{children}</Text>
    </TouchableOpacity>
  )
}
