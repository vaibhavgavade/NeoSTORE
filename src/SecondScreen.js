import React, {Component} from 'react';
import {View,Text,Button,StyleSheet,ScrollView,CheckBox,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import images from '../Constant/Images';
import Input from '../Component/Input';
import RoundButton from '../Component/RoundButton';
import Toptext from '../Component/Toptext';
import Colors from '../Constant/Colors'




export default class SecondScreen extends Component{


  static navigationOptions = ({navigation})=>({
    headerTitleStyle:{
     fontSize: 30,
    }
  })

constructor(props){
    super(props);
    this.state={
      datasource:[],
      checked:false,
      radioBtnsData:['Male','Female'],
      isChecked:0,
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      confirm_password:'',
      gender:'M',
      phone_no:''
    


  }
  }
      checkedItems=()=>{
        this.setState({checked:!this.state.checked})

      }  

    btnoperation(){
      {this.props.navigation.navigate('thirdpage')}
      {this.registerComponent()}

    }

      registerComponent(){
        const first_name = this.state.first_name;
        const last_name =this.state.last_name;
        const email=this.state.email;
        const password=this.state.password;
        const confirm_password =this.state.confirm_password;
        const gender = this.state.gender;
        const phone_no = this.state.phone_no;

        const fetchData={
          method:'POST',
          headers:{
          'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body:`first_name=${first_name}&last_name=${last_name}&email=${email}&password=${password}&confirm_password=${confirm_password}&gender=${gender}&phone_no=${phone_no}`
        };
        return fetch('http://staging.php-dev.in:8844/trainingapp/api/users/register',fetchData)
        .then((response) => response.json())
       
        .then((responseJson) =>{
          this.setState({datasource:responseJson},function() {})
          console.log(responseJson)
         })
          .catch(err =>
            console.error(err)
            )
         }

   render(){
       const{navigate} = this.props.navigation
    
   return(
   
   <KeyboardAvoidingView style={styles.container}>
    <ScrollView >
    <Toptext>NeoSTORE</Toptext>
      <Input image={images.username} placeHolder='First Name' onChangeText={(first_name)=>this.setState({first_name})}/>
      <Input image={images.username} placeHolder='Last Name' onChangeText={(last_name)=>this.setState({last_name})}/> 
      <Input image={images.email} placeHolder='Email' onChangeText={(email)=>this.setState({email})}/>
      <Input image={images.password} placeHolder='Password' onChangeText={(password)=>this.setState({password})}/>
      <Input image={images.password} placeHolder='Confirmed Password' onChangeText={(confirm_password)=>this.setState({confirm_password})}/>

      <View style={{flexDirection:'row',flex:1,paddingTop:20,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,color:'white'}}>Gender</Text>
       {this.state.radioBtnsData.map((data,key)=>
       <View key={key}>
       {this.state.isChecked == key?
        <TouchableOpacity style={{flexDirection:'row',paddingLeft:38}}>
          <Image  source={images.withchkyImg}/>
          <Text style={{fontSize:25,color:'white'}}>{data}</Text>
        </TouchableOpacity>:<TouchableOpacity style={{flexDirection:'row',paddingLeft:38}} onPress={()=>{this.setState({isChecked:key})}}>
          <Image  source={images.withoutChknImg}/>
          <Text style={{fontSize:25,color:'white'}}>{data}</Text>
        </TouchableOpacity>
          }
       </View>
        )}
      </View>
      <Input image={images.cellphone} placeHolder='Phone Number' onChangeText={(phone_no)=>this.setState({phone_no})}/>
          <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:20,marginHorizontal:20,marginLeft:35}}>
              <View style={{flex:1}}>
                  <TouchableOpacity onPress={this.checkedItems}>
                    {this.state.checked?<Image source={images.checkedImg}/>:<Image source={images.uncheckImg}/>}
                </TouchableOpacity>
              </View> 
                <View style={{flex:5,paddingLeft:0.5}}>
                    <Text style={{fontSize:25,color:Colors.c1}}>I agree terms Conditions</Text>
              </View>
      </View>
 
     <RoundButton onPress={()=>this.btnoperation()}>Register</RoundButton> 
     </ScrollView>
     </KeyboardAvoidingView>  
    );
  }
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fe3f3f'   
  },
ViewData:{
    justifyContent:'center',
    alignItems:'center'
  }


});