import React, { Component } from 'react';
import { View, Text,StyleSheet,AsyncStorage } from 'react-native';
import Toptext from '../Component/Toptext';
import Input from '../Component/Input';
import RoundButton from '../Component/RoundButton';
import images from '../Constant/Images'

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource:[],
      old_password:'',
      password:'',
      confirm_password:''
    };
  }

  async resetPasswordiS(){
    try{
        const token = await AsyncStorage.getItem('@NeoStore_at')
        console.log('order placing token is:'+token)
    
            const old_password=this.state.first_name;
            const  password=this.state.last_name;
            const confirm_password=this.state.email;
            
 
    const fetchData={
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            access_token:token
          },
          body:`old_password=${old_password}&password=${password}&confirm_password=${confirm_password}`
    };

    fetch('http://staging.php-dev.in:8844/trainingapp/api/users/change',fetchData)
    .then((response)=>response.json())
    .then((responseJson)=>{
              this.setState({username:responseJson})
      console.log('reset password data:',responseJson)
    }).catch((err)=>
          console.log(err)
    )
  }
  catch(error){
    console.log(error.message)
  }
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
       <Input image={images.password} placeHolder='Current Password' onChangeText={(old_password)=>this.setState({old_password})}/>
       <Input image={images.password} placeHolder='New password' onChangeText={(password)=>this.setState({password})}/>
        <Input image={images.password} placeHolder='Confirmed password' onChangeText={(confirm_password)=>this.setState({confirm_password})}/>
        <RoundButton onPress={()=>this.resetPasswordiS()}>RESET PASSWORD</RoundButton>


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