import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,AsyncStorage,Picker,Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';
import images from  '../Constant/Images';
import InputSpinner from 'react-native-input-spinner';
import {Ionicons} from '@expo/vector-icons';

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
    async fetchApiData(){
            try {
            const token = await AsyncStorage.getItem('@NeoStore_at')
            console.log(token)
                // console.log('Acesss token is:'+token)
                // this.setState({access_token:token})
            const fetchData={
            method:'GET',
            headers:{
                access_token:token,
                 'Content-Type':'application/json'
            }
        };
        return fetch('http://staging.php-dev.in:8844/trainingapp/api/cart',fetchData)
        .then(response =>response.json())
        .then(responseJson=>{
            this.setState({
                datasource:responseJson.data,
                total:responseJson.total,
                cartCount:responseJson.count
               })
        })
        .catch(error=>{
            console.error(error)

        })
    }catch(error){
        console.log(error.message)
    }
}
         deleteCart(id){
         console.log('Delete Pressed'+this.state.myid);
        const product_id = id;
        const fetchData={
            method:'POST',
            headers:{
                access_token:'5cebf6e5139b6', 
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`product_id=${product_id}`
        };
        return fetch('http://staging.php-dev.in:8844/trainingapp/api/deleteCart',fetchData)
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log('Done delete Api is called')
            console.log(responseJson)
            this.fetchApiData()
        })
        .catch((err)=>
            console.log(err)
        )
}

   async updatingCart(value, id){
       const quantity=value;
       const product_id=id;
       console.log(quantity+" vaibhav gavade "+product_id)
       console.log("Done")
       try{
           
            const token = await AsyncStorage.getItem('@NeoStore_at')
             console.log('updating Cart token is:'+token)
             const fetchData={
            method:'POST',
            headers:{
                access_token:token,
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`product_id=${product_id}&quantity=${quantity}`
        };
        return fetch('http://staging.php-dev.in:8844/trainingapp/api/editCart',fetchData)
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log("call Api")
            console.log(responseJson)
             this.fetchApiData()
            })
        .catch((err)=>
            console.log(err)
        )
    }
    catch(err){
        console.log(err)}
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
                    
            <View style={{marginTop: 20,marginLeft:10}}>
                <Swipeout 
                right={swipeOutbtn} 
                autoClose={true} 
                backgroundColor="transparent"
                onOpen={this.onopenSwipe(item.product.id)}
                onClose={this.oncloseSwipe(item.product.id)}>
             <Image source={{uri:item.product.product_images}} style={{width:100,height:100}}/>
             <Text style={{fontSize:20}}>{item.product.name}</Text>
                <View style={{flexDirection:'row'}}>
                            
                            <Text style={{fontStyle:'italic',fontSize:18}}>{item.product.product_category}</Text>
                                  <InputSpinner 
                                  background="transparent"
                                  value={item.quantity} 
                                  style={MycartStyles.spinner} 
                                  max={8} 
                                  min={1} 
                                  colorMax={"#f04048"} 
                                  colorMin={"#40c5f4"}
                                  onChange={(quantity)=> this.updatingCart(quantity,item.product.id)  }
                                  background="transparent" />
                           
                          <Text style={{fontSize:15}}>₹{item.product.cost}</Text>
                 </View>
                <View style={{ borderBottomColor:'#696969',borderBottomWidth:0.5,marginTop:5}}/>
               
                    </Swipeout>
                    </View>
                     
                   )}
                   keyExtractor={(item, index) => index.toString()}/>
                    <View style={{flex:0,bottom:0,position:'absolute',marginBottom:40,paddingLeft:30}}>
                       <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:25,marginLeft:80}}>Total</Text>
                        <Text style={{fontSize:25,paddingLeft:50}} >₹{this.state.total}</Text>
                        </View>  
                        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',height:51,width:300,marginLeft:30,borderRadius:5}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('order')}>
                        <Text style={{fontSize:30,color:'white'}}>Order Now</Text>
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
            height:50,
            width:150
    }
});