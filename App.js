import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0N7ZMbRBLCnjpQ7RWTtBHhZxbldUTSsA",
  authDomain: "ovium-1075a.firebaseapp.com",
  projectId: "ovium-1075a",
  storageBucket: "ovium-1075a.appspot.com",
  messagingSenderId: "278625508680",
  appId: "1:278625508680:web:a3cbe8424e1e0feef9a77d",
  measurementId: "G-XGKZVDKHBH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Ovium Fitness</Text>
    </View>
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
