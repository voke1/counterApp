import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import {  createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './src/Login';
import CounterScreen from './src/Counter';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Counter: {
    screen: CounterScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
