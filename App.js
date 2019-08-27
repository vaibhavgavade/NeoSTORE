
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Third from './Route'

import ContextProvider from './Context/ContextProvider'



export default class App extends Component {
 

  render() {
    return (
      <ContextProvider>
          <Third/>
      </ContextProvider>
    );
  }
}









