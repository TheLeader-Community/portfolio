import { ImageBackground, Text, View } from "react-native";


export default function PresentationCard({ img, composition, prix, children }: { img: string, prix: number, composition?: string[], children: string }) {


  return (
    <ImageBackground  source={require("assets/img/food/bg1.jpg")} className=" relative flex justify-center w-full  h-72 lg:h-80 rounded-xl bg-cover  bg-no-repeat">
      <View className="  flex justify-center items-center text-white absolute bg-gradient-to-tr from-black via-black/85  to-transparent w-full h-full rounded-xl">
        <View className=" p-5 lg:p-32 pb-0">
          <View className=" flex text-xs lg:text-3xl gap-3">
            {
              composition?.map((element: string, index: number) => (
                <Text key={index}>{element}</Text>
              ))
            }
          </View>
          <Text className=" text-lg mt-2 lg:text-4xl font-semibold">
            {children}
          </Text>
          <View className=" flex flex-col mt-5 gap-2">
            <View className=" flex justify-between">
              <Text className=" text-xl lg:text-4xl font-extrabold">{prix} <Text>FCFA</Text></Text>
            </View>
            <Text className=" btn bg-emerald-500 rounded-full mt-3">Acheter</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}