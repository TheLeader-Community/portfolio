import { Image, View, Text } from "react-native";

export function CategorieCard({img, title, nb_resultat = 0}:{img:string, title:string, nb_resultat?:number}) {
  return (
    <View className=" relative flex flex-col justify-center items-center w-full">
      <Image source={require("assets/img/food/bg1.jpg")} alt="" className="  size-20 object-cover rounded-full" width={250} height={250} />
      <Text className=" text-nowrap  text-sm text-black">{title}</Text>
      <View className=" top-0 flex justify-center items-center absolute text-white text-xs bg-black/50 rounded-full size-20">
        <Text className="">{nb_resultat} resultats</Text>
      </View>
    </View>
  )
}
