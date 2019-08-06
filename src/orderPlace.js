import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity,Button,StyleSheet} from 'react-native';
import Input from '../Component/Input';
import Images from '../Constant/Images'
import images from '../Constant/Images';
;

export default class orderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        access_token:''

    };
  }

  orderPlacing(){
    const username=this.state.username;
    const address=username
      const fetchData={
          method:'POST',
          headers:{
              'Content-Type':'application/x-www-form-urlencoded',
              'access_token':'5d43da46422a0'
            },
            body:`address=${address}`
      };

      fetch('http://staging.php-dev.in:8844/trainingapp/api/order',fetchData)
      .then((response)=>response.json())
      .then((responseJson)=>{
                this.setState({username:responseJson})
        console.log('my order olacing data is:',responseJson)
      })

      .catch((err)=>
            console.log(err)
      )

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
    borderWidth:1,
    height:100,
    width:300,
    marginTop:20,
    borderColor:'#000000ed',
    marginHorizontal:15,
    alignContent:'center',
    fontSize:20,
    paddingLeft:10

  },
  buttonStyles:{
    backgroundColor:'red',
    height:51,
    width:300, 
    marginHorizontal:13 ,
    borderRadius:5,
    fontWeight:'200',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  orderNowText:{
    alignContent:'center',
    fontSize:30,
    color:'white'
  },
  addressTxt:{
    fontSize:40,
    marginHorizontal:70
  }
})