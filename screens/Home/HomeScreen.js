import React from 'react';
import { View, ScrollView } from 'react-native';
import Post from '../../screenComponents/Post'; 

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <Post />
      </ScrollView>
    </View>
  );
}
