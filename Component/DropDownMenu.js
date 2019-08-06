import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

export default class DropDownMenu extends Component {
  
    render() {
      const data = [{vale:'1'},
                    {value:'2'},
                    {value:'3'},
                    {value:'4'},
                    {value:'5'}
                    ]
    return (
      <View style={dropMenu.container}>
         <Dropdown
        label='favourite Fruite'
        data={data}
        />
      </View>
    );
  }
}

const dropMenu=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }

})
