import React, { Component } from 'react';
import { View, Text,Image,FlatList,TouchableOpacity,StyleSheet,AsyncStorage,SafeAreaView} from 'react-native';
import Api from '../Component/Api';
import {scale} from 'react-native-size-matters';
import {Shadow} from '../Component/Shadow';

export default class OrderListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource:[],
      access_token:''
};
  }
  static navigationOptions =({navigation})=>({
     headerTitleStyle:{
       fontSize:30,
    }
   });
  componentDidMount(){
    const method='GET';
    const url='orderList';
    return Api(url,method,null)
    .then(responseJson=>{
      console.log("Done")
      console.log("order listing data is:"+responseJson)
      this.setState({
          datasource:responseJson.data.reverse()
        },
          function() {} )
    }).catch(err=>{
        console.error(err)
    })
       }
  
 
     



   render() {
    const{navigate}=this.props.navigation;

    console.log('order listing data is:',this.state.datasource)
    return (
       
      // <View> 
      <SafeAreaView style={{flex:1}}>
        <FlatList
        data={this.state.datasource}
        renderItem={({item})=>(
          <Shadow backgroundColor='#f5f5f5'>
          <View style={orderlistStyle.contaniner}>
            <TouchableOpacity onPress={()=>navigate('orderdetail',{orderId:item.id})} >
            <Text style={orderlistStyle.orderid}>Order ID:{item.id}</Text>
            <View style={{flexDirection:'row'}}>
            <View
              style={{ borderBottomColor:'#808080',borderBottomWidth:scale(0.5),width:scale(150)}}
            />
              <Text style={orderlistStyle.costStyle}>₹:{item.cost} </Text>
              </View>
            <Text style={orderlistStyle.orderDate}>Order Data:{item.created}</Text>
            <View
              style={{ borderBottomColor:'#696969',borderBottomWidth:scale(0.5),marginTop:scale(20)}}
            />
          
            </TouchableOpacity>
            </View>
            </Shadow>
            )}
        />
       </SafeAreaView>
      // </View> 
    );
  }
}

const orderlistStyle = StyleSheet.create({
  contaniner:{
    margin:scale(10),
    flex:1

  },
  orderid:{
    fontSize:scale(25),
    fontWeight:'normal'
  },
  orderDate:{
    fontSize:scale(20),
    color:'#808080',
    marginTop:scale(20)
  },
  costStyle:{
    fontSize:scale(25),
    paddingLeft:scale(50),
  }
})