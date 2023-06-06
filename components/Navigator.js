import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/home/home'; 
import SettingScreen from './screens/home/settings';
import ReelScreen from './screens/home/reel';
import CreateScreen from './screens/home/notes';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={"home"} >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="analytics" component={AnalyticsScreen} />
      <Tab.Screen name="notes" component={NotesScreen} />
      <Tab.Screen name="settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 