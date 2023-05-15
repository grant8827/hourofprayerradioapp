import React from 'react';
import { View, Text, Image, StyleSheet, Linking, } from 'react-native';
import Player from './Player';
import About from './About';
import Foot from './Foot';
import HeadText from './HeadText';
const Home = () => {
 
  return (
    <View style={styles.container2}>
        <Image source={require('../Image/logo.jpg')} style={{width:300, height:210, borderRadius:80, margin:20,}}/>
   
<Text style={{fontSize:25, color:'#000', width:300, textAlign:'center', fontWeight:'700', margin:10,}}>Welcome To</Text>
<HeadText />



    <View style={{width: '100%', height: 2, backgroundColor: '#000'}}></View>
<Text style={{width:300, margin:20, color:'#000'}}>We Pray, We Praise, We Believe, God Delivers, God Gets The Praise</Text>
<Player/>

<About/>
<Foot/>



    </View>
  )
}



const styles = StyleSheet.create({
container2:{
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},

logo:{
    width: 250,
    height:250,
    borderRadius: 50,
    margin: 20,
    padding:20,
},

icon:{
flexDirection:'row',
height:80,
width:'100%',
justifyContent:'center'
},

socialMedia:{
  width: 50,
  height:50,   
},

});



export default Home
