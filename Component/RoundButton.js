import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import Colors from '../Constant/Colors'


const RoundButton = props => (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
                <Text style={styles.butttonText}>{props.children}</Text>
             
            </TouchableOpacity>
    );

    


export default RoundButton;

const styles=StyleSheet.create({

    buttonStyle:{
        
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Colors.c1,
            height:52,
            marginHorizontal:13,
            borderRadius:5,
            fontWeight:'200',
            marginTop:20

    },
    butttonText:{
            fontSize:30,
           color:Colors.c2
    }
});