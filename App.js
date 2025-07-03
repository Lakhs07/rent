/* import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import DiscoverPage from './Screens/DiscoverPage';
import Home from './Screens/Home';

export default function App() {
  return (
    <>
    <DiscoverPage/> 
    <Home/>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import DiscoverPage from './Screens/DiscoverPage'
import Home from './Screens/Home'

const Stack = createNativeStackNavigator();

export default function App(){
    return(
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DiscoverPage" screenOptions={{ headerShown: false }}>
          {/* <Stack.Navigator initialRouteName="Splash"> */}
            <Stack.Screen name = "DiscoverPage" component = {DiscoverPage} />
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
};

