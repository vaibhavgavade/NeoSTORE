import React, { Component } from 'react';
import { View, Text,Image,FlatList,TouchableOpacity,StyleSheet,AsyncStorage} from 'react-native';
import Api from '../Component/Api';

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
            this.orderListAPI()
       }
     orderListAPI(){
 
        const method='GET';
        const url='orderList';
        const body=null
        return Api(url,method,body)
        .then(responseJson=>{
          console.log("Done")
          console.log("order listing data is:"+responseJson)
          this.setState({
              datasource:responseJson.data},
              function() {}
              
              )
        }).catch(err=>{
            console.error(err)
        })




   }

   render() {
    const{navigate}=this.props.navigation;

    console.log('order listing data is:',this.state.datasource)
    return (
      <View>
        <FlatList
        data={this.state.datasource}
        renderItem={({item})=>(
          <View style={orderlistStyle.contaniner}>
            <TouchableOpacity onPress={()=>navigate('orderdetail',{orderId:item.id})} >
            <Text style={orderlistStyle.orderid}>Order ID:{item.id}</Text>
            <View style={{flexDirection:'row'}}>
            <View
              style={{ borderBottomColor:'#808080',borderBottomWidth:0.5,width:210}}
            />
              <Text style={orderlistStyle.costStyle}>₹:{item.cost} </Text>
              </View>
            <Text style={orderlistStyle.orderDate}>Order Data:{item.created}</Text>
            <View
              style={{ borderBottomColor:'#696969',borderBottomWidth:0.5,marginTop:20}}
            />
          
            </TouchableOpacity>
            </View>
            )}
        />
       
      </View>
    );
  }
}

const orderlistStyle = StyleSheet.create({
  contaniner:{
    margin:10,
    flex:1

  },
  orderid:{
    fontSize:25,
    fontWeight:'normal'
  },
  orderDate:{
    fontSize:20,
    color:'#808080',
    marginTop:20
  },
  costStyle:{
    fontSize:25,
    paddingLeft:30,
  }
})