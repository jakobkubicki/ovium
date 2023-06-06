import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View>
      <Text>
        Login
      </Text>
    </View>
  );
};

export default LoginScreen;
