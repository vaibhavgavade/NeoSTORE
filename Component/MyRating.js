import React, { Component } from 'react';
import { View,StyleSheet,Image} from 'react-native';
import images from '../Constant/Images'
import {scale} from 'react-native-size-matters'




export default class MyRating extends Component {
  

render() {
      let ratingObj=this.props.ratings
      console.log(ratingObj)
      let stars=[]
      for(i=1;i<=5;i++){
          let path=images.starCheck
          if(ratingObj<i){
              path=images.starUncheck
          }
          stars.push((<Image style={styles.image} source={path}/>))

      }
    return (
      <View style={styles.container}>
        {stars}
      </View>
    );
  }
}


const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:scale(15)

    },
    image:{
        width:scale(15),
        height:scale(15)
    },
   
})