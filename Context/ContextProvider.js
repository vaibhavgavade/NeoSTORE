import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Cartcontext from '../Context/context';
import Api from '../Component/Api';
export default class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      count:null,
      email: null,
      name: null
    };
    this.getData()
  }
 

    getData(){
    
      const method = 'GET';
      const url='users/getUserData';
      return Api(url,method,null)
      .then(responseJson=>{
        console.log("Done")
        console.log(responseJson.data.total_carts);
        
      this.setState({
        count:responseJson.data.total_carts
      })
      }).catch(err=>{
        console.error(err)
        })
  }

  render() {
    return (
      <Cartcontext.Provider
        value={{
          state: this.state,
          getData:this.getData
        }}
      >
        {this.props.children}
      </Cartcontext.Provider>
    );
  }
}
