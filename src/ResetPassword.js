import React, { Component } from 'react';
import { View, Text,StyleSheet,AsyncStorage } from 'react-native';
import Toptext from '../Component/Toptext';
import Input from '../Component/Input';
import RoundButton from '../Component/RoundButton';
import images from '../Constant/Images'
import Api from '../Component/Api';


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

   resetPasswordiS(){
            const old_password=this.state.first_name;
            const  password=this.state.last_name;
            const confirm_password=this.state.email;
            
      const method='POST';
      const url="users/change";
      const body=`old_password=${old_password}&password=${password}&confirm_password=${confirm_password}`
      return Api(url,method,body)
      .then(responseJson=>{
        console.log("reset password data is:"+responseJson)
          this.setState({
            datasource:responseJson
          })
          this.sucessFull()
      }).catch(err=>{
        console.error(err)
      })
}

sucessFull(){
  if(this.state.datasource.status==200){
    alert(""+this.state.datasource.user_msg)
  } else if (this.state.datasource.status == 401) {
    alert("" + this.state.datasource.user_msg);
  } else if (this.state.datasource.status == 400) {
    alert("" + this.state.datasource.user_msg);
  } else if(this.state.datasource.status==500){
    alert(""+this.state.datasource.message)
  }
  else {
    alert("Something Went Wrong");
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