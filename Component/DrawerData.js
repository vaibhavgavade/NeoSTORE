import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,AsyncStorage} from 'react-native';
import images from '../Constant/Images';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons'
import {scale} from 'react-native-size-matters'
export default class DrawerData extends Component{

    constructor(props){
        super(props);
        this.state = 
        {
                emailId:'',
                fName:'',
                lName:'',

                drawerInformation:[
                {image:images.purchase, title:'My Carts',action:'cart',number:'0'},
                {image:images.tables,title:'Tables',action:'Tables',id:'1'},
                {image:images.chair,title:'Chairs',action:'Tables',id:'2'},
                {image:images.sofa,title:'Sofas',action:'Tables',id:'3'},
                {image:images.cupboard,title:'Cupbaords',action:'Tables',id:'4'},
                {image:images.account,title:'My Account',action:'Account'},
                {image:images.order,title:'My Orders',action:'orderList'},
                {image:images.logout,title:'Logout',action:'firstPage'}
            ]
        };
        this.storeData()
}

    async storeData(){
        try{
                const email = await AsyncStorage.getItem('@NeoStore_email')
                const firstname= await AsyncStorage.getItem('@NeoStore_fname')
                const lastName=await AsyncStorage.getItem('@NeoStore_lname')
                console.log('Drawer email id is:'+email)
                this.setState({
                            emailId:email,
                            fName:firstname,
                            lName:lastName

                })

        }
        catch(error){
            console.log(error.message)
        }
    }

    render(){

        
    return(

           

           <View style={DrawerStyles.D}>

            <View style={{justifyContent:'center',alignItems:'center'}}>    
                <Image style={{height:scale(50),width:scale(50),borderRadius:scale(25)}} source={images.profile}/>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'black',fontSize:scale(11)}}>{this.state.fName}</Text>
                <Text style={{color:'black',fontSize:scale(11),paddingLeft:scale(3)}}>{this.state.lName}</Text>
                </View>
                <Text style={{color:'black',fontSize:scale(11),fontWeight:'bold',paddingTop:5 ,paddingLeft:30,paddingRight:30}}>{this.state.emailId}</Text>
            </View>
            <FlatList
             data={this.state.drawerInformation}
            renderItem={({item})=>
          
           <TouchableOpacity style={DrawerStyles.D1} key={item.image} 
           onPress={()=>this.props.navigation.navigate(item.action,{id:item.id})}
           //onPress={()=>console.log('tapping')}
           >
             
               <Image style={{height:scale(35),width:scale(35)}} source={item.image}/>
              <Text style={DrawerStyles.textData}>{item.title}</Text>
              <Text style={{marginHorizontal:10}}>{item.number}</Text>
    
             
           </TouchableOpacity>
          
        }/>
           </View>

        );
    }
}


const DrawerStyles = StyleSheet.create({
    D:{
        flex:1,
        marginVertical:50,
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
        fontSize:scale(20),
        paddingLeft:scale(25)

    }
})