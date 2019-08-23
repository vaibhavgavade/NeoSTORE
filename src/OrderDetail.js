import React, { Component } from 'react';
import { View, Text,FlatList,Image,AsyncStorage} from 'react-native';
import Api from '../Component/Api';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters';
export default class OrderDetail extends Component {
constructor(props) {
    super(props);
    this.state = {
      datasource:[],
      total:'',
      access_token:''
     }
  }
componentDidMount(){
    this.orderDFetchData()
  }
 orderDFetchData(){
    const prouctData=this.props.navigation.getParam('orderId')
    const order_id = prouctData
    const method="GET"
      const url = `orderDetail?order_id=${order_id}`
      return Api(url,method,null)
      .then(responseJson=>{
        console.log(responseJson)
        this.setState({
          datasource:responseJson.data.order_details,
          total:responseJson.data.cost
        })
      }).catch(err=>{
        console.error(err)
      })
  }
  render() {
    return (
      <View style={{marginTop:5,marginLeft:5,}}>
         <View style={{flexDirection:'row',marginTop:40}}>
       <Text style={{paddingLeft:scale(25),fontSize:scale(25),fontWeight:'bold'}}>Total</Text>
       <Text style={{paddingHorizontal:scale(100),fontSize:scale(25),fontWeight:'bold'}}> ₹  {this.state.total}</Text>
       </View>
   <FlatList
      data={this.state.datasource}
       renderItem={({item})=>(
        <View style={{flexDirection:'row',marginTop:scale(20)}}>
         <Image source={{uri:item.prod_image}} style={{height:scale(80),width:scale(120)}}/>
         <View style={{flexDirection:'column',marginLeft:20}}>
         <Text style={{fontSize:scale(18)}}>{item.prod_name}</Text>
          <Text style={{fontStyle:'italic',color:'#808080',fontSize:scale(15)}}>({item.prod_cat_name})</Text>
          <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:scale(20)}}>QTY : {item.quantity}</Text>
         <Text style={{paddingHorizontal:scale(50),fontSize:scale(20)}}> {item.total}</Text>
         </View>
         </View>
         </View>
       )}/>
      
      </View>
    );
  }
}
