import React, { Component } from 'react';
import { View, Text,FlatList,Image,AsyncStorage} from 'react-native';
import { Item } from 'native-base';


export default class OrderDetail extends Component {



  constructor(props) {
    super(props);
    this.state = {
      datasource:[],
      total:'',
      access_token:''
     
    }
  }

  static navigationOptions =({navigation})=>({
   
    title:'Order ID:'+ navigation.getParam('orderId'),
    headerTitleStyle:{
      fontSize:30,
     
    }
   });

  componentDidMount(){
    this.orderDFetchData()
  }

 async orderDFetchData(){

    try{
      const token = await AsyncStorage.getItem('@NeoStore_at')
      console.log('Order detail token is:'+token)
    
    const prouctData=this.props.navigation.getParam('orderId')
   
   console.log(prouctData)
   const order_id = prouctData
    const fetchdata={
      method:'GET',
      headers:{
            access_token:token,
          'Content_Type':'application/x-www-form-urlencoded'

      }
    };
    fetch(`http://staging.php-dev.in:8844/trainingapp/api/orderDetail?order_id=${order_id}`,fetchdata)
    .then((response)=>response.json())
    .then((responseJson)=>{
            this.setState({
              datasource:responseJson.data.order_details,
              total:responseJson.data.cost

              

            })

            console.log('order deail is:',responseJson)
      })
      .catch((err)=>{
        console.error(err)
      })

    }catch(error){
      console.log(error.message)
    }

    }
  

  render() {
    return (
      <View style={{marginTop:10,marginLeft:5}}>
   
     <FlatList
      
       data={this.state.datasource}
       renderItem={({item})=>(
        <View style={{flexDirection:'row',marginTop:20}}>
         <Image source={{uri:item.prod_image}} style={{height:80,width:120}}/>
         <View style={{flexDirection:'column',marginLeft:20}}>
         <Text style={{fontSize:18}}>{item.prod_name}</Text>
      
         <Text style={{fontStyle:'italic',color:'#808080',fontSize:15}}>({item.prod_cat_name})</Text>
          <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:20}}>QTY : {item.quantity}</Text>
         <Text style={{paddingHorizontal:80,fontSize:20}}> {item.total}</Text>
         </View>
         
       
         </View>
         </View>
       
       
        
       )}/>
       <View style={{flexDirection:'row',marginTop:40}}>
       <Text style={{paddingLeft:25,fontSize:25,fontWeight:'bold'}}>Total</Text>
       <Text style={{paddingHorizontal:115,fontSize:25,fontWeight:'bold'}}> ₹  {this.state.total}</Text>
       </View>
      
        
      </View>
    );
  }
}
