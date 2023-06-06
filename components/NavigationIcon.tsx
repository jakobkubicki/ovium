import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface NavigationIconProps {
  route: string, 
  isFocused: boolean
}

const  NavigationIcon = ({route, isFocused}: NavigationIconProps) => {
  const renderIcon = (route: string, isFocus: boolean) =>{
    let height: number = 20;
    let width: number = 20;
    
    switch (route) {
      case "Home":
        return isFocus? <Ionicons name="home" size={20}  color="white" /> :  <Ionicons name="home" size={20}  color="white"/>
      case "Profile":
        return isFocus? <Ionicons name="person" size={20}  color="white" /> :  <Ionicons name="person" size={20} color="white" />
      case "Create":
        return isFocus? <Ionicons name="add" size={20}  color="white" /> :  <Ionicons name="add" size={20} color="white" />
      case "Reel":
        return isFocus? <Ionicons name="leaf" size={20}  color="white" /> :  <Ionicons name="leaf" size={20} color="white" />
    case "Search":
            return isFocus? <Ionicons name="search" size={20}  color="white" /> :  <Ionicons name="search" size={20} color="white" />
    default:
        break;
    }
  }

  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  
  )
}

const styles = StyleSheet.create({})

export default NavigationIcon