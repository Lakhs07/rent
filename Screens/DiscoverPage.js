import React from "react";
import { View , StyleSheet ,Text , TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native';


const DiscoverPage = ({navigation}) => {
    return (
    <SafeAreaView style= {styles.container}>
    <View style={styles.container1}>
          <Text style={styles.title}>Discover Your{'\n'}Dream Homestay</Text>
          <Text style={styles.subtitle}>
          Enjoy the comfort of affordable, rental{'\n'}booking with our app
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={{color:'white',textAlign: 'center',fontSize: 16}} >Get Started</Text>
          </TouchableOpacity>
    </View>
 </SafeAreaView>
);

}; 

 const styles = StyleSheet.create({
    container:{
        flex:1,
    },
  container1:{
    backgroundColor:'#C1DAE6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    top: -260
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginVertical: 20,
    top: -250
  },
  button:{
    position:'absolute',
    top: 800,
    color:'white',
    backgroundColor:'#775CFF',
    width:300,
    borderRadius:8,
    paddingTop: 19,
    paddingBottom:19,
  },

});
export default DiscoverPage;