import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({focused, icon, title} : any) => {
  if(focused){
    return(
      <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden' >
          <Image source={icon} className='size-5' tintColor="#151312"/>
          <Text className='text-black text-base font-semibold ml-2'>{title}</Text>
      </ImageBackground> 
    )
  }

  return(
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} className='size-5' tintColor="#A8B5DB"/>
    </View>
  )
}

const _Layout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false}}>
      <Tabs.Screen name="index" options={{headerShown: false, title: 'Home', tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.homeIcon} title="Home" />
      )}}/>
      <Tabs.Screen name="habitMaker" options={{headerShown: false, title: 'Habit Maker', tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.habitIcon} title="Habit" />
      )}}/>
      <Tabs.Screen name="profile" options={{headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.profileIcon} title="Profile" />
      )}}/>
    </Tabs>
  )
}

export default _Layout