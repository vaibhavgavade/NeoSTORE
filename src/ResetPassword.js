import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Toptext from '../Component/Toptext';
import Input from '../Component/Input';
import RoundButton from '../Component/RoundButton';
import images from '../Constant/Images'

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions =({navigation})=>({
  
    headerTitleStyle:{
      fontSize:25,
   }
  });

  render() {
    return (
      <View style={resetStyles.container}>
       <Toptext>NeoSTORE</Toptext>
       <Input image={images.password} placeHolder='Current Password'/>
       <Input image={images.password} placeHolder='New password'/>
        <Input image={images.password} placeHolder='Confirmed password'/>
        <RoundButton>RESET PASSWORD</RoundButton>


      </View>
    );
  }
}

const resetStyles=StyleSheet.create({
    container:{
        flex:1 ,
       backgroundColor:'#fe3f3f',

    }
})