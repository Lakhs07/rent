import React from "react";
import {View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { Searchbar, Card, Avatar, Button, Chip, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

const Home=()=>{

  

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const MyComponent = () => (
  <Card>
    <Card.Actions>
        <Button>&#11088; 5.0</Button>
    </Card.Actions>
    <Card.Content>
      <View>
        <Text>Comfort Stay</Text>
        <Text>Rs. 350 / Day</Text>
        <Text>3 Bed | 1 Bath | 250.0 m²</Text>
      </View>
    </Card.Content>
  </Card>
  );

  return(
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
         <Avatar.Icon size={48} icon="menu" color="black" style={{ backgroundColor: 'white',}}/>
         <View style={{justifyContent: 'center',alignItems:'center'}}>
         <Text style={{fontWeight: 'bold', fontSize: 18, color: '#ffffff',}}>Current Location</Text>
         <Text style={{fontSize: 16, color: '#ffffff',}}> <Avatar.Icon size={20} icon="map-marker" /> Tindivanam,Villupuram</Text></View>
         <Avatar.Icon size={48} icon="bell" color="black" style={styles.iconContainer}/>
      </View>

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        placeholderTextColor="#aaa"
      />
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.chips}>
        <Chip icon={(props) => <MaterialCommunityIcons name="fire" {...props} color="#fff" />} style={styles.chip}>
          <Text style={styles.chipText}>Trending</Text>
        </Chip>
        <Chip icon={(props) => <MaterialCommunityIcons name="home" {...props} color="#fff" />} style={styles.chip}>
          <Text style={styles.chipText}>Home</Text>
        </Chip>
        <Chip icon={(props) => <MaterialCommunityIcons name="domain" {...props} color="#fff" />} style={styles.chip}>
          <Text style={styles.chipText}>Apartment</Text>
        </Chip>
        <Chip icon={(props) => <MaterialCommunityIcons name="domain" {...props} color="#fff" />} style={styles.chip}>
          <Text style={styles.chipText}>PG</Text>
        </Chip>
      </ScrollView>

      { /*Card Design*/ }

      {/* card - 1 */}
      <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={require('../assets/img1.webp')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Top Left Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>5.0</Text>
      </View>

      {/* Top Right Icon */}
      <View style={styles.favoriteIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>

      {/* Bottom Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Comfort Stay</Text>
            <Text style={styles.subtitle}>Tindivanam</Text>
          </View>
          <Text style={styles.price}>Rs. 350 / Day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>2 Bed</Text>
          <Text style={styles.detailText}>1 Bath</Text>
          <Text style={styles.detailText}>250.00m2</Text>
        </View>
      </View>
    </View>


    {/* card - 2 */}
    <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={require('../assets/img2.webp')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Top Left Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>4.5</Text>
      </View>

      {/* Top Right Icon */}
      <View style={styles.favoriteIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>

      {/* Bottom Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Sunrise Cottage</Text>
            <Text style={styles.subtitle}>Gingee Fort Area</Text>
          </View>
          <Text style={styles.price}>Rs. 500 / Day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>2 Bed</Text>
          <Text style={styles.detailText}>1 Bath</Text>
          <Text style={styles.detailText}>350.00m2</Text>
        </View>
      </View>
    </View>


    {/* card - 3 */}
    <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={require('../assets/img5.png')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Top Left Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>4.5</Text>
      </View>

      {/* Top Right Icon */}
      <View style={styles.favoriteIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>

      {/* Bottom Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Little Nest</Text>
            <Text style={styles.subtitle}>Auroville Road</Text>
          </View>
          <Text style={styles.price}>Rs. 450 / Day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>2 Bed</Text>
          <Text style={styles.detailText}>1 Bath</Text>
          <Text style={styles.detailText}>300.00m2</Text>
        </View>
      </View>
    </View>


    {/* card - 4 */}
    <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={require('../assets/img3.jpg')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Top Left Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>4.0</Text>
      </View>

      {/* Top Right Icon */}
      <View style={styles.favoriteIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>

      {/* Bottom Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Smart Stay Home</Text>
            <Text style={styles.subtitle}>Near Tindivanam Railway Station</Text>
          </View>
          <Text style={styles.price}>Rs. 400 / Day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>2 Bed</Text>
          <Text style={styles.detailText}>1 Bath</Text>
          <Text style={styles.detailText}>300.00m2</Text>
        </View>
      </View>
    </View>

    {/* card - 5 */}
    <View style={styles.cardContainer}>
      {/* Background Image */}
      <Image
        source={require('../assets/img4.webp')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Top Left Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>5.0</Text>
      </View>

      {/* Top Right Icon */}
      <View style={styles.favoriteIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>

      {/* Bottom Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>The Home Point</Text>
            <Text style={styles.subtitle}>Villpuram</Text>
          </View>
          <Text style={styles.price}>Rs. 450 / Day</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>2 Bed</Text>
          <Text style={styles.detailText}>1 Bath</Text>
          <Text style={styles.detailText}>350.00m2</Text>
        </View>
      </View>
    </View>

    </ScrollView>
  );

};

//Stylesheet

const styles=StyleSheet.create({
  container: {
    backgroundColor: '#1c1d1d',
  },
  topBar: {
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  iconContainer:{
     backgroundColor: 'white',
  },
  searchBar: {
    marginTop: 30,
    backgroundColor: '#4c4d4d',
    marginLeft: 15,
    marginRight: 15,
  },
  chips: {
    marginVertical: 20,
  },
  chip: {
    backgroundColor:'#4c4d4d',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  chipText: {
    color: '#ffffff',
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#ddd',
    margin: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    elevation: 3,
  },
  ratingText: {
    fontWeight: 'bold',
    color: '#000',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 8,
    elevation: 3,
  },
  infoBox: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    elevation: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#333',
  },

});

export default Home;