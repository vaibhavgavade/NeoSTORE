import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';
import images from '../Constant/Images';
import Input from '../Component/Input'
import Toptext from '../Component/Toptext'
import { placeholder } from '@babel/types';
import RoundButton from '../Component/RoundButton';
import { ScrollView } from 'react-native-gesture-handler';

// import fontData from '../Constant/MyFonts';
// import inputData from '../Component/input';



export default class firstScreen extends Component{

    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    static navigationOptions = {
        title:'first Screen'
    }


    componentDidMount() {
       
      }


  render(){
      const{navigate}=this.props.navigation

    return(
          
           <View style={loginStyle.container}>   
        <View>
        <Toptext>NeoSTORE</Toptext>
        <Input image={images.username} placeholder='Username'/>
        <Input image={images.password} placeholder='Password'/>
        <RoundButton >Login</RoundButton>
        </View>
        <TouchableOpacity style={loginStyle.passwordLbl}>
        <Text style={loginStyle.textPassword}>Forot Password</Text>
        </TouchableOpacity>
      
        <View style={loginStyle.Account}>
            <Text style={loginStyle.AccountText}>DONT HAVE AN ACCOUNT</Text>
            <TouchableOpacity style={loginStyle.AccoutBtn} onPress={()=>navigate('thirdpage')}>
                <Image  source={images.Account}/>
            </TouchableOpacity>

        </View>
        </View>
        



    )
} 
}

const loginStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fe3f3f'
    },
    passwordLbl:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
       
    },
    textPassword:{
        fontSize:25,
        color:'white'
    },
    Account:{
        flexDirection:'row',
        position:'absolute',
        bottom:30,
        marginHorizontal: 10,
     },
     AccountText:{
         fontSize:20,
         color:'white'
    },
    AccoutBtn:{
   paddingLeft:50
    }
})

