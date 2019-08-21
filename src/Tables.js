import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import MyRating from '../Component/MyRating';
import Api from '../Component/Api'


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
    fontSize:30,
   
   
  }
 });
     
    componentDidMount(){
  
     
      const itemValues=this.props.navigation.getParam('id')
      console.log(itemValues)
        const product_category_id = itemValues
  
  
       
        // const fetchData={
        //     method:'GET',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     }
        // };
        // return fetch(`http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=${product_category_id}`,fetchData)
        // .then(response =>response.json())
        // .then(responseJson=>{
        //     this.setState({
        //             allData:responseJson.data
                    
        //         })
        // })
        // .catch(error=>{
        //     console.error(error)

        // })

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
                <View style={{flex:1,flexDirection:'row',margin:25}}>
              <Image  source={{uri:item.product_images}} style={{height:'100%', width:'30%'}}/>
             <View style={{flex:5,marginHorizontal:30}}>

              <Text style={{fontSize:15}}>{item.name}</Text>
              
             <Text style={{fontSize:15}}>{item.producer}</Text>
                  <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:25,color:'red',paddingTop:10}}>Rs. {item.cost}</Text>
              <MyRating ratings={item.rating} />
              </View>
            
            </View>

              </View>
              </TouchableOpacity>

              
        )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          );
    }
}

const styles = StyleSheet.create({
        L:{
            flex:1,
            alignItems: 'center',
            justifyContent:'center',
          
            
        },

});