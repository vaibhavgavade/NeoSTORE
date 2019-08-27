import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Api from '../Component/Api';
import CartContext from '../Context/context'


export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:null,
      email:null,
      name:null
    };
    this.getUpdate()
  }

  getUpdate(){
      const method='GET';
      const url='users/getUserData';
      return Api(url,method,null)
      .then(responseJson=>{
        if(responseJson.status==200){
          console.log(responseJson.data.total_carts)
          this.setState({
            count: responseJson.data.total_carts,
            email: responseJson.data.user_data.email,
            name:
              '' +
              responseJson.data.user_data.first_name +
              ' ' +
              responseJson.data.user_data.last_name
          });
          console.log('test' + this.state.count);
        }
      })
    .catch(error => {
        console.error(error);
      });
    }
  render() {
    return (
        <CartContext.Provider value={{
          state: this.state,
          onPlus: this.getUpdate,
          onMinus: this.getUpdate,
          getUpdate: this.getUpdate
        }}>
          {this.props.children}
          
        </CartContext.Provider>
    );
  }
}
