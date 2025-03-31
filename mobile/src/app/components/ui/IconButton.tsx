import { TouchableOpacity } from "react-native";

export default function IconButton({ icon }: { icon: any }) {
  return (
    <TouchableOpacity className=' text-white bg-white/20 size-12 items-center justify-center rounded-full '>
      {icon}
    </TouchableOpacity>
  )
}