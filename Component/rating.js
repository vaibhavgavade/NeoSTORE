import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import images from '../Constant/Images';

 class rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultRating:1,
        maxRating:5
    };
   // this.Star = 'https://aboutreact.com/wp-content/uploads/2018/08/star_filled.png';
    //Empty Star. You can also give the path from local
   // this.StarBorder = 'https://aboutreact.com/wp-content/uploads/2018/08/star_corner.png';
  }

  updateRating(rate){
      this.setState({defaultRating:rate})
  }

  

  render() {

    let RatingBar = []
    for(i=1;i<=this.state.maxRating;i++){
        RatingBar.push(
            <TouchableOpacity activeOpacity={0.7} key={i} onPress={this.updateRating.bind(this,i)}>
                <Image style={ratingStyle.image} source={i<=this.state.defaultRating?images.starCheck:images.starUncheck}/>
             </TouchableOpacity>

        )

    }
    return (
      <View style={ratingStyle.R1}>
      {RatingBar}
      <Text>rating all data</Text>
      </View>
    );
  }
}


export default rating;
const ratingStyle=StyleSheet.create({
    R1:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:20
    },
    image:{
        width:40,
        height:40,
        resizeMode:'cover'

    }
});