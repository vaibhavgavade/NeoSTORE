import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import RoundButton from '../Component/RoundButton';



export default class myCart extends Component{

    constructor(){
        super();
        this.state={
            datasource:[],
            access_token:'',
            total:''
        }
    };


  static navigationOptions =({navigation})=>({
   
     headerTitleStyle:{
        fontSize:30,
     }
    });
    componentDidMount(){

        const fetchData={
            method:'GET',
            headers:{
                'access_token':'5d43da46422a0',
                'Content-Type':'application/x-www-form-urlencoded',

            },
        };
        fetch('http://staging.php-dev.in:8844/trainingapp/api/cart',fetchData)
        .then((response)=>response.json())
        .then((responseJson)=>{
           this.setState({
               datasource:responseJson.data,
               total:responseJson.total

            })
        }

             
        )

        .catch((err)=>
                console.log(err)
        )

    }
    
    render(){
     console.log('API cart data is:',this.state.datasource)
        return(
          
            
               <View style={MycartStyles.container}>
                   <FlatList
                   data={this.state.datasource}
                   renderItem={({item})=>(
            <View style={{flexDirection:'row',marginVertical:30}}>
                <Image source={{uri:item.product.product_images}} style={{width:80,height:80}}/>
                    <View style={{flexDirection:'column',marginLeft:20}}>
                             <Text style={{fontSize:20}}>{item.product.name}</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <Text style={{fontStyle:'italic',fontSize:18}}>{item.product.product_category}</Text>
                                     <View style={{paddingHorizontal:150}}>
                                        <Text style={{fontSize:15}}>₹{item.product.cost}</Text>
                                     </View>
                                 </View>
                               
                                
                       </View>
                       
                        
                               
            </View>
                   )}
                   keyExtractor={(item, index) => index.toString()}/>

                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                        <Text style={{fontSize:25}}>Total</Text>

                        <Text style={{fontSize:25}} >₹{this.state.total}</Text>
                        </View>
                           
                       
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('order')} style={{backgroundColor:'red',height:51,width:300, height:52, marginHorizontal:13 ,borderRadius:5,fontWeight:'200',marginTop:20,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{alignSelf:'center',fontSize:30,color:'white'}}>Order Now</Text>
                                </TouchableOpacity>    
                   
                             
               </View>
       

        );
    }
}

const MycartStyles = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
     
    
    }
});