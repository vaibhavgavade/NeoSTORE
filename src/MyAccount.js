import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,KeyboardAvoidingView,ScrollView} from 'react-native';
import Input from '../Component/Input';
import images from '../Constant/Images';
import RoundButton from '../Component/RoundButton'
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../Constant/Colors'

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ProfileBtnAction(){
    {this.props.navigation.navigate('ResetPassword')}
  }

  render() {
    return (
      <KeyboardAvoidingView style={myAccountstyles.container}>
      
     
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}>    
                <Image style={{height:135,width:135,borderRadius:65}} source={images.profile}/>
        </View>
        <ScrollView>
        <Input image={images.username} placeHolder='First Name'/>
        <Input image={images.username} placeHolder='Last Name'/>
        <Input image={images.email} placeHolder='Email Id'/>
        <Input image={images.cellphone} placeHolder='Contact number'/>
        <Input image={images.dateBirth} placeHolder='Date Birth'/>
        <RoundButton>EDITE PROFILE</RoundButton>
       
        <TouchableOpacity style={myAccountstyles.ResetPassword} onPress={()=>this.ProfileBtnAction()}>
          <Text style={myAccountstyles.textStyles}>RESET PASSWORD</Text>
        </TouchableOpacity>
      
       </ScrollView>
        
       </KeyboardAvoidingView>
    );
  }
}


const myAccountstyles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fe3f3f',
    
  },
  ResetPassword:{
    backgroundColor:Colors.c1,
    height:51,
    justifyContent:'center',
    alignItems:'center',
   marginTop:70
    
  },
  textStyles:{
    fontSize:25,
    color:'red'
  }
})