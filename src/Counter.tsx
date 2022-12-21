import React, { useState } from 'react';
import { View, TextInput, AsyncStorage, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

function CounterScreen({navigation}) {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if(counter <= 0){
        return;
    }
    setCounter(prevCount => prevCount - 1);
  };



  const handleLogout = async () => {
    // Clear the local storage and navigate back to the login screen
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
      style={styles.text}
      >{counter}</Text>
   
   <View style={{marginTop: 30, }}>
      <Button title="Increment" onPress={handleIncrement} containerStyle={styles.button}/>
      <Button title="Decrement" onPress={handleDecrement} containerStyle={styles.button} />
      <Button title="Logout" onPress={handleLogout} containerStyle={styles.button}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        width: '100%'
        

    },

    text: {
        fontSize: 30,
    },

    container: {
        // flex: 1,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CounterScreen;