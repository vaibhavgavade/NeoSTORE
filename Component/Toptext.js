import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Constant/Colors';

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
       

    },
    h2:{
        fontSize:60,
        color:Colors.c1
    }

});