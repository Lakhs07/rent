import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import DiscoverPage from './Screens/DiscoverPage';

export default function App() {
  return (
    // <GestureHandlerRootView style={{ flex: 1, fontFamily: theme.fonts.dmRegular }}>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </GestureHandlerRootView>
    <DiscoverPage/> 
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
