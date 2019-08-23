import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity,Button,StyleSheet,AsyncStorage} from 'react-native';
import Input from '../Component/Input';
import Images from '../Constant/Images'
import images from '../Constant/Images';
import {scale} from 'react-native-size-matters'
;

export default class orderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        access_token:''

    };
  }

  static navigationOptions =({navigation})=>({
   
    headerTitleStyle:{
       fontSize:30,
    }
   });

  async orderPlacing(){
      try{
          const token = await AsyncStorage.getItem('@NeoStore_at')
          console.log('order placing token is:'+token)
      

     
    const username=this.state.username;
    const address=username
      const fetchData={
          method:'POST',
          headers:{
              'Content-Type':'application/x-www-form-urlencoded',
              access_token:token
            },
            body:`address=${address}`
      };

      fetch('http://staging.php-dev.in:8844/trainingapp/api/order',fetchData)
      .then((response)=>response.json())
      .then((responseJson)=>{
                this.setState({username:responseJson})
        console.log('my order olacing data is:',responseJson)
      }).catch((err)=>
            console.log(err)
      )
    }
    catch(error){
      console.log(error.message)
    }
  }
  myorder(){

   {this.orderPlacing()}
  }
  
  render() {

    return (
      <View style={addresstyles.container}>
        <Text style={addresstyles.addressTxt}> Address </Text>
  <TextInput onChangeText={(text)=>this.setState({username:text})} style={addresstyles.textInput}
    placeholder='Enter your Address' multiline={true}/>
    <TouchableOpacity onPress={()=>this.myorder()} style={addresstyles.buttonStyles}>
      <Text style={addresstyles.orderNowText}>ORDER NOW</Text>
    </TouchableOpacity>
        
        
      </View>
    );
  }
}


const addresstyles=StyleSheet.create({
  container:{
    flex:1,
    margin:30
  },
  textInput:{
    borderWidth:scale(1),
    height:scale(100),
    width:scale(250),
    marginTop:scale(20),
    borderColor:'#000000ed',
    marginHorizontal:scale(28),
    alignContent:'center',
    fontSize:scale(20),
    paddingLeft:scale(10),
    borderRadius:scale(5)

  },
  buttonStyles:{
    backgroundColor:'red',
    height:scale(51),
    width:scale(250), 
    marginHorizontal:scale(28) ,
    borderRadius:scale(5),
    fontWeight:'200',
    marginTop:scale(20),
    justifyContent:'center',
    alignItems:'center'
  },
  orderNowText:{
    alignContent:'center',
    fontSize:scale(30),
    color:'white'
  },
  addressTxt:{
    fontSize:scale(45),
    marginHorizontal:scale(60),
    marginTop:scale(20),
    justifyContent:'center',
    alignItems:'center'
  }
})