import React,{Component} from 'react';
import { Text, Button, View,StyleSheet} from 'react-native';
import CartContext from '../Context/context'

class MyConsumer extends Component {
  render() { 

   
      return(
        <View style={Styles.ViewData}>
   
        <CartContext.Consumer>
                   {contextValue=>{
                       return(
                           <View>
                           <Text style={{fontSize:20}}>{contextValue.state.count}</Text>
                           </View>
                       )
                   }}
               </CartContext.Consumer>
        </View>
            )
    
      }
}
export default MyConsumer;

const Styles = StyleSheet.create({
    container:{
        fontSize:18,
        paddingHorizontal:10,
        paddingVertical:3
    },
    ViewData:{
            height:30,
            width:30,
            borderRadius:20,
            backgroundColor:'white'
    }
})