import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Constant/Colors';
import {scale,moderateScale,verticalScale} from 'react-native-size-matters'

const Toptext = props =>(
    
    <View style={Styles.h1}>
        <Text style={Styles.h2}>{props.children}</Text>
    </View>        
    
    
);

export default Toptext;

const Styles = StyleSheet.create({
    h1:{
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',
        // height:verticalScale(41)
       

    },
    h2:{
        fontSize:scale(60),
        color:Colors.c1
    }

});