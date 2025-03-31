import { DollarSign, Globe2, Group, Loader, QrCode, Satellite, SearchCheck, Send, View } from "lucide-react-native";
import CardIcon from "./cardIcon";
import { ScrollView, Text } from "react-native";
import CardSection from "./CardSection";

export default function Section() {
  return (
    <ScrollView>
      <View className=' justify-center items-center mt-5'>
        <Text className=' text-white font-bold text-5xl'>$21.23</Text>
        <Text className=' font-bold mt-2 text-lg text-blue-300'>+$0.36 + 1.74%</Text>
      </View>
      <View className=' grid grid-cols-4 gap-2 px-5 mt-10'>
        <CardIcon icon={<QrCode />}>receive</CardIcon>
        <CardIcon icon={<Send />}>Send</CardIcon>
        <CardIcon icon={<Loader />}> swap</CardIcon>
        <CardIcon icon={<DollarSign />}>buy</CardIcon>
      </View>
      <View className='mt-5 px-5 pb-32 gap-2'>
        <CardSection icon={<SearchCheck size={25} />}>
          Searh from Explore to find new tokens fatser
        </CardSection>
        <View className=' mt-3 gap-2'>
          <CardSection icon={<Satellite size={25} />}>
            Lorem ipsum dolor sit, amet consectetur adipisicing
          </CardSection>
          <CardSection icon={<Globe2 size={25} />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </CardSection>
          <CardSection icon={<Group size={25} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
          <CardSection icon={<Group size={25} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
          <CardSection icon={<Group size={25} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
        </View>
      </View>
    </ScrollView>
  )
}
