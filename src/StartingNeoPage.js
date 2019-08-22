import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
  } from 'react-native-indicators';

export default class StartingNeoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeValue:false
    };
 setTimeout(() => {
        this.props.navigation.navigate('firstPage');
        this.setState({activeValue:true});

        }, 5000);
    }

    render() {
      return (
      <View style={styles.container}>
          <Text style={{color:'white',fontSize:50}}>WELCOME</Text>
        <Text style={{color:'white',fontSize:50}}> NeOSTORE </Text>
        <View style={{flex:0.1}}>
       <BallIndicator color='white' size={70} style={{marginTop:80}}/>
        {this.state.activeValue}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fe3f3f'
    }
})
