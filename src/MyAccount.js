import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,KeyboardAvoidingView,ScrollView,AsyncStorage,TouchableOpacity,Button } from 'react-native';
import images from '../Constant/Images';
import RoundButton from '../Component/RoundButton';
import Colors from '../Constant/Colors';



export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token:'',
      datasource:[]
    };
  }

componentDidMount(){
    this.callMyAccountApi()
    console.log('datasource data is'+this.state.datasource)
  }
 async callMyAccountApi(){
      const token = await AsyncStorage.getItem('@NeoStore_at')
      console.log('Acess token is:'+token)

  const fetchData={
    method:'GET',
    headers:{
      access_token:token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  };

  return fetch('http://staging.php-dev.in:8844/trainingapp/api/users/getUserData',fetchData)
      .then((response)=>response.json())
      .then((responseJson)=>{
            //  console.log(responseJson)
           this.setState({
              datasource:responseJson.data.user_data
           
           })
      })
}

static navigationOptions =({navigation})=>({
    headerTitleStyle:{
      fontSize:25,
   }
  });

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



        <View style={myAccountstyles.A}>
          <View style={myAccountstyles.A1}>
             <Image   source={images.username}/>
          </View>
        <View style={myAccountstyles.A2}>
              <Text style={myAccountstyles.A3}>{this.state.datasource.first_name}</Text> 
        </View>
         </View>


         <View style={myAccountstyles.A}>
          <View style={myAccountstyles.A1}>
             <Image   source={images.username}/>
          </View>
        <View style={myAccountstyles.A2}>
              <Text style={myAccountstyles.A3}>{this.state.datasource.last_name}</Text> 
        </View>
         </View>


         <View style={myAccountstyles.A}>
          <View style={myAccountstyles.A1}>
             <Image   source={images.email}/>
          </View>
        <View style={myAccountstyles.A2}>
              <Text style={myAccountstyles.A3}>{this.state.datasource.email}</Text> 
        </View>
         </View>


         <View style={myAccountstyles.A}>
          <View style={myAccountstyles.A1}>
             <Image   source={images.dateBirth}/>
          </View>
        <View style={myAccountstyles.A2}>
              <Text style={myAccountstyles.A3}>{this.state.datasource.dob}</Text> 
        </View>
         </View>


         <View style={myAccountstyles.A}>
          <View style={myAccountstyles.A1}>
             <Image   source={images.cellphone}/>
          </View>
        <View style={myAccountstyles.A2}>
              <Text style={myAccountstyles.A3}>{this.state.datasource.phone_no}</Text> 
        </View>
         </View>
        {/* <InputData image={images.username} q/>
        <InputData image={images.username} />
        <InputData image={images.email}/>
        <InputData image={images.cellphone}/>
        <InputData image={images.dateBirth} /> */}
        <RoundButton onPress={()=>this.props.navigation.navigate('editprofile')}>EDIT PROFILE</RoundButton>
       
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
  },



  
    A: {
          marginTop: 20,
          marginHorizontal: 13,
          flexDirection: "row",
          borderRadius: 4,
          borderWidth: 2,
          borderColor:'white',
          height:41,
         
  },
        
  A1: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
      },
      
  A2: {
          flex: 5,
      marginTop:10,
      paddingLeft:5,
      textDecorationColor:'white',
   
         
      },
      A3:{
          fontSize:15,
          color:'white'
      }
 
  
})