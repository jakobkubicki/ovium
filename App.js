import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './components/TabBar.tsx';

import HomeScreen from './screens/Home/HomeScreen.js';
import SettingsScreen from './screens/Settings/SettingsScreen.js';
import ReelScreen from './screens/Reel/ReelScreen.js';
import CreateScreen from './screens/Create/CreateScreen.js';
import LoginScreen from './screens/Auth/LoginScreen.js';
import SearchScreen from './screens/Search/SearchScreen.js';
import ProfileScreen from './screens/Profile/ProfileScreen.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={"Home"} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Reel" component={ReelScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
