import React, {Component} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity,Dimensions,StyleSheet,FlatList} from 'react-native';
import images from '../Constant/Images';
import {ImageCorousel} from '../Component/ImageCorousel';
import {Ionicons} from '@expo/vector-icons';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'

export default class ThirdScreen extends Component{
static navigationOptions = ({navigation})=>({
headerTitleStyle:{
      fontSize:30,
},
headerLeft:(
      <TouchableOpacity style={{paddingLeft:scale(20)}} onPress={()=>navigation.toggleDrawer()}>
        <Image source={images.menuImg}/>
  </TouchableOpacity>),

    headerRight:(
      <TouchableOpacity style={{paddingRight:scale(20)}} onPress={()=>navigation.navigate('cart')}>
        <Ionicons name="md-cart" color="white" size={30}/>
        </TouchableOpacity>
    )
});

constructor(){
    super();
    this.state = {
      sliderData:[
       {data:images.sliderOne},
       {data:images.sliderTwo},
       {data:images.sliderThree},
       {data:images.sliderFour}],

      gridData:[
        {key:images.tableImg, title:'Tables', values:'1'},
        {key:images.chairImg,title:'Chairs',values:'2'},
        {key:images.sofaImg,title:'Sofas',values:'3'},
        {key:images.cupboardImg,title:'Cupboards',values:'4'} ]
    };
  }

render(){
    
return(
      <View style={{flex:1,flexDirection:'column'}}>
  <View style={{flex:0.4}}>
      <ImageCorousel image={this.state.sliderData}/>
      </View>
          <View style={{flex:0.5,justifyContent:'center',alignItems:'center',marginTop:15}}>
        <FlatList data={this.state.gridData}  renderItem={({item})=>(
    <TouchableOpacity style={{padding:scale(9)}} key={item.key} onPress={()=>this.props.navigation.navigate('Tables',{id:item.values,navTitle:item.title})}>
       <Image style={{width:verticalScale(150),height:verticalScale(150),borderRadius:15}} source={item.key}/>
    </TouchableOpacity> 
     )}
           numColumns={2}
    />
   </View>
</View>);
  }
} 

