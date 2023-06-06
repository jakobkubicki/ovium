import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface NavigationIconProps {
  route: string, 
  isFocused: boolean
}

const  NavigationIcon = ({route, isFocused}: NavigationIconProps) => {
  const renderIcon = (route: string, isFocues: boolean) =>{
    let height: number = 20;
    let width: number = 20;
    
    switch (route) {
      case "Home":
        return isFocues? <Ionicons name="md-checkmark-circle" size={16}  color="green" /> :  <Ionicons name="md-checkmark-circle" size={32} color="green" />
      case "Login":
        return isFocues? <Ionicons name="md-checkmark-circle" size={16}  color="green" /> :  <Ionicons name="md-checkmark-circle" size={32} color="green" />
      case "Create":
        return isFocues? <Ionicons name="md-checkmark-circle" size={16}  color="green" /> :  <Ionicons name="md-checkmark-circle" size={32} color="green" />
      case "Settings":
        return isFocues? <Ionicons name="md-checkmark-circle" size={16}  color="green" /> :  <Ionicons name="md-checkmark-circle" size={32} color="green" />
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