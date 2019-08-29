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
                           <Text style={Styles.textAllStyles}>{contextValue.state.count}</Text>
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
    ViewData:{
        height:33,
        width:33,
        borderRadius:20,
        backgroundColor:'red'
},
textAllStyles:{
    fontSize:18,
    paddingHorizontal:10,
    paddingTop:5

},
})