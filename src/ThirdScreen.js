import React, {Component} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity,Dimensions,StyleSheet} from 'react-native';
import images from '../Constant/Images'
import { FlatList } from 'react-native-gesture-handler';


export default class ThirdScreen extends Component{
  deviceDimestion=()=>{
    const aheight = Dimensions.get('window').height;
    const bwidth  =Dimensions.get('window').width;

  }

 

static navigationOptions = ({navigation})=>({
headerTitleStyle:{
      fontSize:30,
},

    headerLeft:(
      <TouchableOpacity style={{paddingLeft:20}} onPress={()=>navigation.toggleDrawer()}>
        <Image source={images.menuImg}/>

      </TouchableOpacity>
    ),
});


  constructor(){
    super();
    this.state = {
      sliderData:[
       {key:images.sliderOne},
       {key:images.sliderTwo},
       {key:images.sliderThree},
       {key:images.sliderFour}

      ],

      gridData:[
        {key:images.tableImg, title:'Tables', values:'1'},
        {key:images.chairImg,title:'Chairs',values:'2'},
        {key:images.sofaImg,title:'Sofas',values:'3'},
        {key:images.cupboardImg,title:'Cupboards',values:'4'}

        
      ]
    };
  }

   
  render(){
    

    
    return(
      <View style={{flex:1,flexDirection:'column'}}>

        <View style={{flex:0.4}}>
        <ScrollView 
       horizontal
       pagingEnabled
      snapToAlignment = 'center'
      showsHorizontalScrollIndicator={true}>
        {this.state.sliderData.map(item=>(
          
              <Image  style = {{width:390,height:'100%'}}source={item.key} key={item.key}/>
              
          ))}
           
        </ScrollView>
        <View style={pagingStyles.circleDiv}>
          {this.state.sliderData.map(i=>{

              <View key={i} style={pagingStyles.whiteCircle}/>

          })}
        </View>
        
      
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


      </View>




    );
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