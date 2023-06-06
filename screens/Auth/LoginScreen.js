import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Sign In" onPress={onSignIn} />
    </View>
  );
};

export default LoginScreen;
