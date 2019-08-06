import React from 'react';
import {View,StyleSheet,TextInput,Image} from 'react-native';


const Input = ({image ,placeHolder,onChangeText}) =>(

    <View style={inputStyles.A}>
    <View style={inputStyles.A1}>
     <Image   source={ image}/>
   </View>
   <View style={inputStyles.A2}>
   <TextInput style={inputStyles.A3} placeholder={placeHolder }  onChangeText={onChangeText}/>  
    </View>
</View>
)

export  default Input;


const inputStyles = StyleSheet.create({
  A: {
        marginTop: 20,
        marginHorizontal: 13,
        flexDirection: "row",
        borderRadius: 4,
        borderWidth: 2,
        borderColor:'white',
        height:41,
       
},
      
A1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
A2: {
        flex: 5,
    marginTop:10,
    paddingLeft:5,
    textDecorationColor:'white',
 
       
    },
    A3:{
        fontSize:15,
        color:'white'
    }
});
