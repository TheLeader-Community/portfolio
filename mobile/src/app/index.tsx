import { Cog, DollarSign, EqualApproximately, Globe2, Group, Home, Loader, QrCode, Satellite, Scan, Search, SearchCheck, Send, User2 } from 'lucide-react-native'
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native'


export default function index() {
  return (
    <View className=' flex-1 bg-blue-700 from-blue-700 via-blue-700 to-blue-950'>
      <Header></Header>
      <Section></Section>
      <BottomBar />
    </View>
  )
}

function Header() {
  return (
    <View className=' border-b border-white/10 flex-row items-center justify-between p-2 pt-5 gap-5'>
      <View className=' flex-row gap-2'>
        <IconButton icon={<User2 color={"white"} />} />
      </View>
      <View className=' flex-row gap-3 text-white'>
        <IconButton icon={<Scan color={"white"} />} />
        <IconButton icon={<Search color={"white"} />} />
      </View>
    </View>
  )
}

function Section() {
  return (
    <ScrollView>
      <View className=' justify-center items-center mt-5'>
        <Text className=' text-white font-bold text-5xl'>$21.23</Text>
        <Text className=' font-bold mt-2 text-lg text-blue-300'>+$0.36 + 1.74%</Text>
      </View>
      <ScrollView horizontal className=' grid grid-cols-4 gap-5 px-5 w-full  mt-10 flex-row'>
        <View className=' w-24 p-2'>
          <CardIcon icon={<QrCode color={"white"} />}>receive</CardIcon>
        </View>
        <View className=' w-24 p-2'>
          <CardIcon icon={<Send color={"white"} />}>Send</CardIcon>
        </View>
        <View className=' w-24 p-2'>
          <CardIcon icon={<Loader color={"white"} />}> swap</CardIcon>
        </View>
        <View className=' w-24 p-2'>
          <CardIcon icon={<DollarSign color={"white"} />}>buy</CardIcon>
        </View>

      </ScrollView>
      <View className='mt-5 px-5 pb-20 gap-2'>
        <CardSection icon={<SearchCheck size={25} color={"white"} />}>
          Searh from Explore to find new tokens fatser
        </CardSection>
        <View className=' mt-3 gap-2'>
          <CardSection icon={<Satellite size={25} color={"white"} />}>
            Lorem ipsum dolor sit, amet consectetur adipisicing
          </CardSection>
          <CardSection icon={<Globe2 size={25} color={"white"} />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </CardSection>
          <CardSection icon={<Group size={25} color={"white"} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
          <CardSection icon={<Group size={25} color={"white"} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
          <CardSection icon={<Group size={25} color={"white"} />}>
            Lorem ipsum dolor, sit amet consectetur
          </CardSection>
        </View>
      </View>
    </ScrollView>
  )
}


function CardIcon({ icon, children, style }: { icon: any, children?: string, style?: string }) {
  return (
    <TouchableOpacity className={' p-2 rounded-lg bg-white/20 text-white items-center ' + style}>
      {icon}
      <Text className=' text-white'>{children}</Text>
    </TouchableOpacity>
  )
}

function CardSection({ icon, children }: { icon: any, children: string }) {
  return (
    <TouchableOpacity className=' items-center text-white flex-row p-5 gap-3 rounded-lg bg-gradient-to-r bg-white/10 from-white/20 via-white/5 to-white/10'>
      {icon}
      <Text className=' text-white'>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

function IconButton({ icon }: { icon: any }) {
  return (
    <TouchableOpacity className=' text-white bg-white/20 size-12 items-center justify-center rounded-full '>
      {icon}
    </TouchableOpacity>
  )
}

function BottomBar() {
  return (
    <View className=' fixed p-2 bottom-0 flex-row gap-2 items-center justify-center w-full bg-blue-700/30 backdrop-blur-xl'>
      <View className=' w-32'>
        <CardIcon icon={<Cog color={"white"} />} style='bg-white/5'>parametre</CardIcon>
      </View>
      <View className=' w-32'>
        <CardIcon icon={<Home color={"white"} />} style='bg-white/5'>receive</CardIcon>
      </View>
      <View className=' w-32'>
        <CardIcon icon={<EqualApproximately  color={"white"}/>} style='bg-white/5'>overflow</CardIcon>
      </View>
    </View>
  )
}