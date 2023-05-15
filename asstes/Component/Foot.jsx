import React from 'react'
import { View, Image, StyleSheet, Text, Linking, } from 'react-native'

const SocialIcon = () => {
  return (
    <View>
      <View style={styles.icon}>
<Text style={styles.socialIcon} onPress={()=> Linking.openURL('https://www.facebook.com')}>
    <Image source={require('../Image/social-media-icon/facebook.png')} style={styles.socialMedia}/></Text>
<Text style={styles.socialIcon} onPress={()=> Linking.openURL('https://www.twitter.com')}>
    <Image source={require('../Image/social-media-icon/twitter.png')} style={styles.socialMedia}/></Text>
<Text style={styles.socialIcon} onPress={()=> Linking.openURL('https://www.instagram.com')}>
    <Image source={require('../Image/social-media-icon/instagram.png')} style={styles.socialMedia}/></Text>
<Text style={styles.socialIcon} onPress={()=> Linking.openURL('https://www.youtube.com')}>
    <Image source={require('../Image/social-media-icon/youtube.png')} style={styles.socialMedia}/></Text>
  </View>
  <Text  style={{fontSize:15, color:'#000', textAlign:'center', marginTop:50, marginBottom:5,}}>Copyright © The Hour Of Prayer Radio</Text>
    </View>
  )
};


const styles = StyleSheet.create({
    icon:{
        flexDirection:'row',
        height:80,
        width:'100%',
        justifyContent:'center',
        marginTop:20,
        },
    
    logo:{
        width: 250,
        height:250,
        borderRadius: 50,
        margin: 20,
        padding:20,
    },
    socialMedia:{
        width: 50,
        height:50,   
      },
      socialIcon:{
        marginRight:20,
      }

});


export default SocialIcon
