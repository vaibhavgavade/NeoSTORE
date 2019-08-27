import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,AsyncStorage,Picker,Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';
import images from  '../Constant/Images';
import InputSpinner from 'react-native-input-spinner';
import {Ionicons} from '@expo/vector-icons';
import CartContext from '../Context/context';
import Api from '../Component/Api';
import {scale} from 'react-native-size-matters';
import {Shadow} from '../Component/Shadow';


export default class myCart extends Component{
constructor(props){
        super(props);
        this.state={
            datasource:[],
            access_token:'',
            total:'',
            quantity:'',
            myid:null,
            cartCount:''
        }
    };
    onopenSwipe(id){
        this.setState({ myid:id})
        console.log(this.state.myid);
}
    oncloseSwipe(id){
        if(this.state.myid!=null){
            this.setState({myid:null})
        }
    }

static navigationOptions =({navigation})=>({
   headerTitleStyle:{
        fontSize:30,
     }
    });
    componentDidMount(){
         this.fetchApiData()
     }
      fetchApiData(){
        const method="GET";
         const url="cart";
        return Api(url,method,null)
        .then(responseJson =>{
            this.setState({
                datasource:responseJson.data,
                total:responseJson.total,
                cartCount:responseJson.count
            })
        }).catch(err=>{
            console.error(err)
        })
}
         deleteCart(id,contextValue){
         console.log('Delete Pressed'+this.state.myid);
         const product_id = id;
            const method = 'POST'
            const body = `product_id=${product_id}`
            const url = 'deleteCart'
            return Api(url,method,body)
            .then(responseJson=>{
                    console.log("delete cart here")
                    console.log(responseJson)
                    this.fetchApiData()
                    
                    contextValue.state.count=responseJson.total_carts;
            })
            .catch(err=>{
                console.error(err)
            })
      
}
    updatingCart(value, id){
       const quantity=value;
       const product_id=id;
       console.log(quantity+" vaibhav gavade "+product_id)
       console.log("Done")
            const method="POST";
            const url="editCart";
            const body=`product_id=${product_id}&quantity=${quantity}`;
            return Api(url,method,body)
            .then((responseJson)=>{
                console.log("Add cart data is"+responseJson)
                this.fetchApiData()
            }).catch(err=>{
                console.error(err)
            })
            
  }
     render(){
            const swipeOutbtn=[{
            onPress: ()=>this.deleteCart(this.state.myid),
            backgroundColor: 'white',
            component:(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        {/* <Image source={images.deleteBtn}/>   */}
                        <Ionicons ios="ios-trash" 
                        name="md-trash" size={50} 
                        color="red" 
                        borderRadius={10}
                       />
                </View>
            ),
        }
    ]
    if(this.state.cartCount>0){
        return(
            <View style={MycartStyles.container}>
                <FlatList
                   data={this.state.datasource}
                   renderItem={({item})=>(
             <Shadow backgroundColor='#f5f5f5'>   
            <View style={{marginTop: 20,marginLeft:10,flexDirection:'row'}}>
                
                {/* <Swipeout 
                right={swipeOutbtn} 
                autoClose={true} 
                backgroundColor="transparent"
                onOpen={this.onopenSwipe(item.product.id)}
                onClose={this.oncloseSwipe(item.product.id)}> */}
                <Image source={{uri:item.product.product_images}} style={{width:scale(138),height:scale(110),marginLeft:scale(5),borderRadius:scale(5)}}/>
                <View style={{flexDirection:'column',marginTop:scale(15)}}>
                    <Text style={{fontSize:scale(15),marginLeft:7}}>{item.product.name}</Text>
               
                            <Text style={{fontStyle:'italic',fontSize:scale(12),marginLeft:10}}>{item.product.product_category}</Text>

                                  <InputSpinner 
                                  background="transparent"
                                  value={item.quantity} 
                                  max={8} 
                                  min={1} 
                                //   colorMax={"#ff0000"} 
                                //   colorMin={"#40e0d0"}
                                  onChange={(quantity)=> this.updatingCart(quantity,item.product.id)  }
                                  background="transparent" 
                                  color={'#2e8b57'}
                                  height={scale(30)}
                                  width={scale(100)}
                                  style={{marginLeft:10}}
                                 />
                            <View style={{marginHorizontal:20,flexDirection:'row',marginTop:5}}>
                          <Text style={{fontSize:scale(15)}}>₹:{item.product.cost}</Text>
                            <View style={{marginHorizontal:30}}>
                                        
                                       

                                                       
                                           
                <CartContext.Consumer>
                   {contextValue=>{
                       return(
                        <TouchableOpacity onPress={()=>this.deleteCart(item.product.id,contextValue)}>
                                                   
                        <Ionicons name="md-trash" color="red" size={scale(20)} />
                        </TouchableOpacity>
                       )
                   }}
               </CartContext.Consumer> 
                                             
                                        
                                      
                                       </View>
                                </View>
                         
                 </View>
                
               {/* </Swipeout> */}
             </View> 
             </Shadow>    
             
             )}/>
             
                    <View style={{flex:0,position:'absolute',bottom:scale(20),justifyContent:'center',alignItems:'center'}}>
                       <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:scale(25),marginLeft:scale(25)}}>Total</Text>
                        <Text style={{fontSize:scale(25),marginLeft:scale(50)}} >₹:{this.state.total}</Text>
                        </View>  
                        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',height:scale(51),width:scale(270),borderRadius:scale(5),marginLeft:scale(35)}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('order')}>
                        <Text style={{fontSize:scale(30),color:'white'}}>Order Now</Text>
                         </TouchableOpacity>  
                         </View>
                        </View>
                 </View> 
                 );
                   }
                   else{
                       return(
                    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons
                            name="md-cart"
                            size={200}
                            color="#00ced1"/>
                        <Text style={{fontSize:35,color:'red'}}  >Cart is empty</Text>
                    </View>
                       )
                   }
    }
}

const MycartStyles = StyleSheet.create({
    container:{
        flex:1,
     },
    uspinner:{
            height:10,
            width:135
    }
});