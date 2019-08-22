import React from 'react';
import {View,StyleSheet,TextInput,Image,Dimensions} from 'react-native';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters';
const {height,width} = Dimensions.get('window')


const Input = ({image ,placeHolder,onChangeText}) =>(

    <View style={inputStyles.A}>
    <View style={inputStyles.A1}>
     <Image source={ image}/>
   </View>
   <View style={inputStyles.A2}>
   <TextInput style={inputStyles.A3} placeholder={placeHolder }  onChangeText={onChangeText}/>  
    </View>
</View>
) 

export  default Input;


const inputStyles = StyleSheet.create({
  A: {
        marginTop: scale(20),
        marginHorizontal: scale(13),
        flexDirection: "row",
        borderRadius: scale(4),
        borderWidth: scale(2),
        borderColor:'white',
        height:verticalScale(41)
       
       
},
      
A1: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      
    },
    
A2: {
        flex: 5,
    marginTop:verticalScale(10),
    paddingLeft:5,
    textDecorationColor:'white',
 
       
    },
    A3:{
        fontSize:scale(15),
        color:'white'
    }
});
