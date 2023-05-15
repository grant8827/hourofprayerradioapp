import React from 'react'
import { Linking, Text, View } from 'react-native'
import Donate from './Donate'

const About = () => {
  return (
    <View >
      <Text style={{fontSize:30, color:'#af0000', marginTop:20, fontWeight:'600', textAlign:'center'}}>CONTACT US</Text>
      <Text style={{fontSize:20, color:'#000', textAlign:'center'}}>Tel:1876 416_6737 or 1876 549 4505</Text>
      <Text style={{fontSize:20, color:'#000', textAlign:'center'}}>Email: radio632@yahoo.com</Text>

      <Text  style={{fontSize:30, color:'#af0000', marginTop:20, fontWeight:'600', textAlign:'center'}}>Sow a seed in our Ministry</Text>
      <Donate/>
      <Text style={{fontSize:30, color:'#af0000', marginTop:20, fontWeight:'600', textAlign:'center'}}>Visit Our Website </Text>
      <Text style={{color:'#0651cc', fontSize:15, textDecorationLine:'underline', textAlign:'center'}}  onPress={() => Linking.openURL('https://thehourofprayerradiojm.com/')}>www.thehourofprayerradiojm.com</Text>
    </View>
  )
}

export default About
