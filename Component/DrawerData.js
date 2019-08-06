import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import images from '../Constant/Images';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



export default class DrawerData extends Component{

    constructor(){
        super();
        this.state = 
        {
            drawerInformation:[
                
                {image:images.cartIcon, title:'My Carts',action:'cart'},
                {image:images.tableIcon,title:'Tables',action:'Tables',id:'1'},
                {image:images.chairIcon,title:'Chairs',action:'Tables',id:'2'},
                {image:images.sofaIcon,title:'Sofas',action:'Tables',id:'3'},
                {image:images.cupboardIcon,title:'Cupbaords',action:'Tables',id:'4'},
                {image:images.username,title:'My Account',action:'Account'},
                {image:images.myOrdersImg,title:'My Orders',action:'orderList'},
                {image:images.logOutimg,title:'Logout',action:'firstPage'}
            ]
        };
    }
    render(){
        return(

           

           <View style={DrawerStyles.D}>

            <View style={{justifyContent:'center',alignItems:'center'}}>    
                <Image style={{height:100,width:100,borderRadius:50}} source={images.profile}/>
                <Text style={{color:'white',fontSize:15,fontWeight:'bold',paddingTop:20 ,paddingLeft:30,paddingRight:30}}>Vaibhav0413@gmail.com</Text>
            </View>
            <FlatList

            data={this.state.drawerInformation}
            renderItem={({item})=>
          
           <TouchableOpacity style={DrawerStyles.D1} key={item.image} 
           onPress={()=>this.props.navigation.navigate(item.action,{id:item.id})}
           //onPress={()=>console.log('tapping')}
           >
               
               <Image style={{height:35,width:35}} source={item.image}/>
            
             
               <Text style={DrawerStyles.textData}>{item.title}</Text>
    
             
           </TouchableOpacity>
          
        }/>
           </View>

        );
    }
}


const DrawerStyles = StyleSheet.create({
    D:{
        flex:1,
        marginVertical:75,
        paddingLeft:5
    
  
    },
    D1:{
         marginLeft:10,
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection:'row',
       paddingLeft:30,
       marginTop:25

    },
    textData:{
        color:'#000000',
        fontSize:20,
        paddingLeft:25

    }
})