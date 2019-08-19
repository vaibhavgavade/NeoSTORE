import React, {Component} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity,Dimensions,StyleSheet,FlatList} from 'react-native';
import images from '../Constant/Images';
import {ImageCorousel} from '../Component/ImageCorousel';
import {Ionicons} from '@expo/vector-icons';

export default class ThirdScreen extends Component{
static navigationOptions = ({navigation})=>({
headerTitleStyle:{
      fontSize:30,
},
headerLeft:(
      <TouchableOpacity style={{paddingLeft:20}} onPress={()=>navigation.toggleDrawer()}>
        <Image source={images.menuImg}/>
  </TouchableOpacity>),

    headerRight:(
      <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation.navigate('cart')}>
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
    <TouchableOpacity style={{padding:9,}} key={item.key} onPress={()=>this.props.navigation.navigate('Tables',{id:item.values,navTitle:item.title})}>
       <Image style={{width:165,height:165}} source={item.key}/>
    </TouchableOpacity> 
     )}
           numColumns={2}
    />
   </View>
</View>);
  }
} 

const pagingStyles=StyleSheet.create({
    circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff"
  }
})