import React, { Component } from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import Input from '../Component/Input';
import images from '../Constant/Images';
import TopText from '../Component/Toptext';
import RoundButton from '../Component/RoundButton';

export default class LoginFPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
       email:''

    };
  }

  
  
    callApiData(){

        const email=this.state.email
        console.log('password email is:'+email)
      const fetchData={
            method:'POST',
            headers:{
                // 'Accept':'application/json',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`email=${email}`
    
      }
     return fetch('http://staging.php-dev.in:8844/trainingapp/api/users/forgot',fetchData)
      .then((response)=>response.json())
      .then((responseJson)=>{
         
           this.setState({
               email:responseJson
           })
           this.wrongpassword()
      })
  }

  wrongpassword(){
      if(this.state.email.status==200)
      {
          {this.state.email.message}
      }
      else if(this.state.email.status==500){
            alert(""+this.state.email.message)
      }else if(this.state.email.status==401){
          alert(""+this.state.email.message)
      }else if(this.state.email.sttus==400){
          alert(""+this.state.email.message)
      }
      else{
          alert('Something went wrong')
      }
  }

  static navigationOptions =({navigation})=>({
    headerTitleStyle:{
      fontSize:30,
     
    }
   });



  render() {
       return (
      <View style={styles.container}>
        <TopText>NeoSTORE</TopText>
        <Input 
        image={images.password} 
        placeHolder='Enter your Email'
        onChangeText={(email)=>this.setState({email})}
        />
        <RoundButton onPress={()=>this.callApiData()}>SUBMIT</RoundButton>

        
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#fe3f3f',
        paddingVertical:50
        
    },
   
});