import { View , StyleSheet ,Text , TouchableOpacity} from "react-native"

const DiscoverPage = () => {
    return (
    <SafeAreaView style= {styles.container}>
    <View style={styles.container1}>
          <Text style={styles.head}>Discover Your </Text>
          <Text style = {styles.heads}>dream homestay</Text>
          <Text style={styles.des}>Enjoy the comfort of affordable, rental,</Text>
          <Text style={styles.des2}>booking with our app</Text>
          <TouchableOpacity style={styles.button} ><Text style={{color:'white'}}>Get Started</Text></TouchableOpacity>
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
  head:{
    height:50,
    width:280,
    position:'absolute',
    top:160,
    left:70,
    fontWeight:600,
    fontSize:30,
   
  },
  heads:{
    height:50,
    width:280,
    position:'absolute',
    top:190,
    left:50,
    fontWeight:600,
    fontSize:30,
   
  },
  des:{
    position:'absolute',
    top: 278,
    left:40
  },
  des2:{
    position:'absolute',
    top: 300,
    left:87
  },
  button:{
    position:'absolute',
    top: 560,
    left:80,
    color:'white',
    backgroundColor:'#775CFF',
    padding: 8,
    width:200,
    paddingLeft:60,
    borderRadius:3,
    paddingTop: 19,
    paddingBottom:19,
  }

});
export default DiscoverPage