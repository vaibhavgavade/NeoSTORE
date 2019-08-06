import React, { Component } from 'react';
import { Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'

const reactheader =({navigation})=>{
    return{
        headeRight:(
           
            <Button onPress={()=>navigation.toggleDrawer()} title='Drawer'/>
          
            
        )

        
    };

};

