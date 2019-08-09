import React, { Component } from 'react';
import { View, Text ,StyleSheet,AsyncStorage} from 'react-native';
import Input from '../Component/Input';
import images from '../Constant/Images';
import Toptext from '../Component/Toptext';
import RoundButton from '../Component/RoundButton';


export default class editProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datasource:[],
        access_token:'',
        first_name:'',
        last_name:'',
        email:'',
        dob:'',
        phone_no:''

    };
  }

//   componentDidMount(){
//       this.callApiEdit()
//   }
async orderPlacing(){
    try{
        const token = await AsyncStorage.getItem('@NeoStore_at')
        console.log('order placing token is:'+token)
    
            const first_name=this.state.first_name;
            const last_name=this.state.last_name;
            const email=this.state.email;
            const dob=this.state.dob;
            const phone_no=this.state.phone_no
 
    const fetchData={
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            access_token:token
          },
          body:`first_name=${first_name}&last_name=${last_name}&email=${email}&profile_pic=${"xyz.jpg"}&dob=${dob}&phone_no=${phone_no}`
    };

    fetch('http://staging.php-dev.in:8844/trainingapp/api/users/update',fetchData)
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

  static navigationOptions =({navigation})=>({
        headerTitleStyle:{
      fontSize:30,
     
    }
   });

   

  render() {
    return (
      <View style={styles.container}>
          <Toptext>NeoSTORE</Toptext>
        <Input image={images.username} placeHolder=' First Name' onChangeText={(first_name)=>this.setState({first_name})}/>
        <Input image={images.username} placeHolder='Last Name' onChangeText={(last_name)=>this.setState({last_name})}/>
        <Input image={images.email} placeHolder='Email' onChangeText={(email)=>this.setState({email})}/>
        <Input image={images.dateBirth} placeHolder='Date of Bitrh' onChangeText={(dob)=>this.setState({dob})}/>
        <Input image={images.cellphone} placeHolder='Contact Number' onChangeText={(phone_no)=>this.setState({phone_no})}/>
        <RoundButton onPress={()=>this.orderPlacing()}>SUBMIT</RoundButton>

      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:'#fe3f3f'

    }
})