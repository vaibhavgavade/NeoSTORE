import React, {Component} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import images from '../Constant/Images'
import { FlatList } from 'react-native-gesture-handler';


export default class ThirdScreen extends Component{

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
        </View>
          
          <View style={{flex:0.5,justifyContent:'center',alignItems:'center',marginTop:15}}>
        <FlatList data={this.state.gridData}  renderItem={({item})=>(
    <TouchableOpacity style={{padding:9,}} key={item.key} onPress={()=>this.props.navigation.navigate('Tables',{id:item.values})}>
        
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