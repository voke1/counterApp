import React, { useState } from 'react';
import { View, TextInput, AsyncStorage, StyleSheet, SafeAreaView } from 'react-native';
import {Button, Input } from 'react-native-elements';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Retrieve the user's email and password from local storage
    const storedEmail = await AsyncStorage.getItem('email');
    const storedPassword = await AsyncStorage.getItem('password');

    // Compare the input to the stored email and password
    if (email === storedEmail && password === storedPassword) {
      // If the input matches, set a flag in local storage indicating that the user is logged in
      await AsyncStorage.setItem('loggedIn', 'true');
      // Navigate to the counter screen
      navigation.navigate('Counter');
    } else {
      // If the input does not match, display an error message
      alert('Invalid email or password');
    }
  };

  const handleRegistration = async () => {
    try {
           // Store the user's email and password in local storage
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    // Navigate to the counter screen
    navigation.navigate('Counter');
        
    } catch (error) {
        alert(`error occurred!,  ${email} ${password}`)
        
    }
 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          label="Email"
          onChangeText={setEmail}
          value={email}

        />
        <Input
          label="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
      <View style={{height: 10}}/>
      <Button title="Register" onPress={handleRegistration} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    margin: 10,
    marginTop: 40,

},

button: {
    marginTop: 50,
    backgroundColor: 'green'
}
})

export default LoginScreen;