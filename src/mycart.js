import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';




export default class myCart extends Component{

    constructor(props){
        super(props);
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
         this.fetchApiData()
    }

           async fetchApiData(){
            try {
                
                const token = await AsyncStorage.getItem('@NeoStore_at')
            console.log(token)
                console.log('Acesss token is:'+token)
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
                total:responseJson.total
            })
        })
        .catch(error=>{
            console.error(error)

        })
    }catch(error){
        console.log(error.message)
    }
    
    }
    
    render(){

        const data = [{label:'1',vale:'1'},
        {label:'2',value:'2'},
        {label:'3',value:'3'},
        {label:'4',value:'4'},
        {label:'5',value:'5'}
        ]
     console.log('API cart data is:',this.state.datasource)
        return(
          
            
               <View style={MycartStyles.container}>
                   <FlatList
                   data={this.state.datasource}
                   renderItem={({item})=>(
            <View style={{flexDirection:'row',marginTop: 10,marginLeft:10}}>
                <Image source={{uri:item.product.product_images}} style={{width:80,height:80}}/>
                    <View style={{flexDirection:'column',marginLeft:20}}>
                             <Text style={{fontSize:20}}>{item.product.name}</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <Text style={{fontStyle:'italic',fontSize:18}}>{item.product.product_category}</Text>
                                    <Text>{item.quantity}</Text>
                                   <Dropdown style={{flexDirection:'row'}}
                                   label='QTY'
                                   data={data}
                                   />
                                     <View style={{paddingHorizontal:120}}>
                                        <Text style={{fontSize:15}}>₹{item.product.cost}</Text>
                                     </View>
                                 </View>
                                 <View style={{ borderBottomColor:'#696969',borderBottomWidth:0.5,marginTop:5}}/>
              </View>
            
                       
                        
                               
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
}


const MycartStyles = StyleSheet.create({
    container:{
        flex:1,
    }
});