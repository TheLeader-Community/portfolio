import { Image, Text, View } from "react-native";



export default function Card({ img, asPromo = false, nom, children, prix }: {
    img: string, asPromo?: boolean, nom: string, children?: string, prix: string
}) {

    return (
        <View className=" relative rounded-xl h-52 shadow p-1 flex flex-col justify-between">
            {asPromo && <View className=" absolute bg-emerald-500 rounded-full inline p-1 text-xs m-1 px-5 text-white font-bold">Promo</View>}
            <View className=" ">
                <Image source={require("assets/img/food/bg1.jpg")} alt="" className=" rounded-xl w-52 h-32 object-cover" width={100} height={100} />
                <Text className="  font-bold">{nom}</Text>
                <Text className=" text-sm text-zinc-500">
                    {prix}FCFA
                </Text>
            </View>
            <View className=" self-end  mt-2  border border-emerald-500 w-full rounded-box bg-transparent text-emerald-500 p-0 h-8 text-sm">voir plus</View>
        </View>
    )
}
