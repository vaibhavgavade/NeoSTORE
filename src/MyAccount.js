import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,KeyboardAvoidingView,ScrollView,AsyncStorage,TouchableOpacity,Button,Dimensions} from 'react-native';
import images from '../Constant/Images';
import RoundButton from '../Component/RoundButton';
import Colors from '../Constant/Colors';
import Api from '../Component/Api';
import {scale,verticalScale} from 'react-native-size-matters';
const{height,width}=Dimensions.get('window')

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
  callMyAccountApi(){

      const method = 'GET';
      const url='users/getUserData';
      return Api(url,method,null)
      .then(responseJson=>{
          this.setState({
            datasource:responseJson.data.user_data
          })
      }).catch(err=>{
        console.error(err)
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
    console.log(this.state.datasource)
  
    return (
      <KeyboardAvoidingView style={myAccountstyles.container}>
      
     
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}>    
                <Image style={{height:scale(80),width:scale(80),borderRadius:scale(40)}} source={images.profile}/>
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
       <View style={{bottom:scale(0)}}>
        <TouchableOpacity style={myAccountstyles.ResetPassword} onPress={()=>this.ProfileBtnAction()}>
          <Text style={myAccountstyles.textStyles}>RESET PASSWORD</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
        
       </KeyboardAvoidingView>
    );
  }
}


const myAccountstyles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fe3f3f',
    height:height,
    width:width
    
  },
  ResetPassword:{
    backgroundColor:Colors.c1,
    height:scale(41),
    justifyContent:'center',
    alignItems:'center',
   marginTop:scale(35)

    
  },
  textStyles:{
    fontSize:scale(25),
    color:'red'
  },



  
    A: {
          marginTop: scale(15),
          marginHorizontal: scale(13),
          flexDirection: "row",
          borderRadius: scale(4),
          borderWidth: scale(2),
          borderColor:'white',
          height:verticalScale(41),
         
  },
        
  A1: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
      },
      
  A2: {
        flex: 5,
      // marginTop:scale(10),
      paddingLeft:scale(5),
      textDecorationColor:'white'
   
         
      },
      A3:{
          fontSize:scale(15),
          color:'white',
         alignItems:'center',
         justifyContent:'center',
         paddingTop: verticalScale(8)
      }
 
  
})