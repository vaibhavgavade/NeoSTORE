import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import MyRating from '../Component/MyRating';
import Api from '../Component/Api';
import {scale} from 'react-native-size-matters';
import {Shadow} from '../Component/Shadow';
import MyConsumer from '../Context/MyConsumerComponent';
export default class Tables extends Component{
constructor(){
        super();
        this.state={
            allData:[]
          }
    }
static navigationOptions =({navigation})=>({
   title:navigation.getParam('navTitle'),
    headerTitleStyle:{
    fontSize:20,
   }
 });
     componentDidMount(){
      const itemValues=this.props.navigation.getParam('id')
      console.log(itemValues)
        const product_category_id = itemValues
        const method = 'GET';
        const url = `products/getList?product_category_id=${product_category_id}`;
        const body = null
        return Api(url,method,body)
        .then(responseJson=>{
          this.setState({
              allData:responseJson.data
          })
        })
        .catch(err=>{
          console.error(err)
        })
   }

    render(){
    console.log(this.state.allData)
        return (
            <View >
              <FlatList 
                data={this.state.allData}
                renderItem={({ item }) => (
                <TouchableOpacity key={item.product_images} onPress={()=>this.props.navigation.navigate('pDetail',{productId:item.id,ProductTitle:item.name})}>
                  <Shadow backgroundColor='#f5f5f5'>
                <View style={{flex:1,flexDirection:'row',margin:scale(5)}}>
              <Image  source={{uri:item.product_images}} style={{height:scale(70), width:scale(90)}}/>
             <View style={{flex:5,marginHorizontal:15}}>
              <Text style={{fontSize:scale(15)}}>{item.name}</Text>
                   
              <Text style={{fontSize:scale(15)}}>{item.producer}</Text>
              
                <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:scale(25),color:'red',paddingTop:10}}>Rs. {item.cost}</Text>
              <MyRating ratings={item.rating} />
              </View>
              </View>
             </View>
             </Shadow>
              </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          );
    }
}

