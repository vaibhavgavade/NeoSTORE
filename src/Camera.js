import React, { Component } from 'react';
import { View, Text,CameraRoll,Button,ScrollView,Image,StyleSheet} from 'react-native';


export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photos:[]
    };
  }

  cameraButtonPressed=()=>{
      console.log('camera opened')
      CameraRoll.getPhotos({
          
          first:5,
          assetType:'photos'
         
          
      }).then(r=>{
          this.setState({photos:r.edges})
      })
      .catch((err)=>{
          console.log(err)

      })

  };

  render() {
    return (
      <View style={styles.container}>
          <Button title='Open Camera' onPress={this.cameraButtonPressed}/>
          <ScrollView>
              {this.state.photos.map((p,i)=>{
                    <Image 
                    source={{uri:p.node.image.uri}}
                    key={i}
                    style={{
                        height:100,
                        width:300
                    }}

                    // source={{uri:p.node.image.uri}}
                    />
              })}
            
          </ScrollView>
        <Text> Camera </Text>
      </View>
    );
  }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

