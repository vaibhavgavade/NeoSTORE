import React, { Component } from 'react';
import { View, Text } from 'react-native';
import context from '../Context/context';


export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count:'',
      
    };
    this.getData()
  }

   async getData(){
    
        console.log("getdataApi is called")
    const token =  await AsyncStorage.getItem('@NeoStore_at')
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
        this.setState({
            count:responseJson.data.total_carts
        
         })
         console.log("cart data is:"+this.state.count)
    })
  }

  render() {
    return (
      <context.Provider
      value={{
          state:this.state,
          getData:this.getData
        }}>
         
    {this.props.children}

    </context.Provider>
    );
  }
}
