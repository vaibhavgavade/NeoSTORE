import React,{Component} from 'react'
import {View} from 'react-native'

const Shadow = props => (
    <View
      style={{
        flex: 1,
        backgroundColor: props.backgroundColor,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#ffc0cb',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10
      }}
    >
      {props.children}
    </View>
  );
  
  export { Shadow};