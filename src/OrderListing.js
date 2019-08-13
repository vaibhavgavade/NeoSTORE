import React, { Component } from 'react';
import { View, Text,Image,FlatList,TouchableOpacity,StyleSheet,AsyncStorage} from 'react-native';

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


     async orderListAPI(){
       try {
         const token = await AsyncStorage.getItem('@NeoStore_at')
         console.log('order listing token is:'+token)


       
    const fetchData={
      method:'GET',
      headers:{
         access_token:token,
        'Content_Type':'application/x-www-form-urlencoded'
      },
      
    };
    fetch('http://staging.php-dev.in:8844/trainingapp/api/orderList',fetchData)
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
          datasource:responseJson.data.reverse()
        })
      
    }) .catch((err)=>
      console.error(err))

  }catch(error){
    console.log(error.message)
  }
    

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