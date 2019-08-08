
import React, {Component} from 'react';
import { createStackNavigator,createAppContainer,createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import firstScreen from './src/firstScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from './src/ThirdScreen';
import Tables from './src/Tables';
import mycart from './src/mycart'
import DrawerData from './Component/DrawerData';
import OrderListing from './src/OrderListing';
import MyAccount from './src/MyAccount';
import Logout from './src/Logout';
import productDetail from './src/ProductDetail';
import HeaderButton from './Component/HeaderButton';
import ResetPassword from './src/ResetPassword';
import orderPlace from './src/orderPlace';
import OrderDetail from './src/OrderDetail';
import StartingNeoPage from './src/StartingNeoPage';



const AppStack = createStackNavigator({

  WelcomeScreen:{
    screen:StartingNeoPage,
    navigationOptions:{
      header:null,
      headerBackTitle:null
      },
},

  firstPage:{
    screen:firstScreen,
    navigationOptions:{
        header:null,
        headerBackTitle:null
        
    },
  },

  secondPage: {
    screen:SecondScreen,
    navigationOptions:{
      title:'Register',

      headerBackTitle:null,
      headerStyle:{
        backgroundColor:'#fe3f3f',
        },
headerTintColor:'white',
    }
  },


},
);




const AppStack2 = createStackNavigator({

 

  thirdpage:{
    screen:ThirdScreen,
    navigationOptions:{
        headerBackTitle:null,
        title:'NeoSTORE',
        headerStyle:{
          backgroundColor:'red'
        },
        headerTintColor:'white'
    },
  },


Tables:{
  screen:Tables,
  navigationOptions:{
    title:'Table',
    headerStyle:{
      backgroundColor:'red'
    },
    headerTintColor:'white'
  }
},


orderList:{
  screen:OrderListing,
  navigationOptions:{
    title:'My order',
    headerStyle:{
      backgroundColor:'red'
    },
    headerTintColor:'white'
  }
},
cart:{
  screen:mycart,
  navigationOptions:{
    title:'My cart',
    headerStyle:{
      backgroundColor:'red',
    },
    headerTintColor:'white',
    headerBackTitle:null
  }
},

Account:{
  screen:MyAccount,
  navigationOptions:{
    title:'My Account',
    headerStyle:{
        backgroundColor:'#fe3f3f'
    },
    headerTintColor:'white'
  }
},

LogOut:{
  screen:Logout,
  navigationOptions:{
    title:'Logout'
  }
},

pDetail:{
  screen:productDetail
},
ResetPassword:{
  screen:ResetPassword,
    navigationOptions:{
   headerBackTitle:null,
      title:'Reset password',
  headerStyle:{
    backgroundColor:'#fe3f3f'
  },
  headerTintColor:'white'
},
},
order:{
  screen:orderPlace,
  navigationOptions:{ 
        title:'My Order',
      
      headerStyle:{
          backgroundColor:'#fe3f3f'
      },
      headerTintColor:'white',
      
  }
},
orderdetail:{
  screen:OrderDetail,
  navigationOptions:{

    headerStyle:{
      backgroundColor:'red'
    },
    headerTintColor:'white'
  }
  
},

},
)


const Drawer = createDrawerNavigator({
  Home:{
    screen:AppStack2,
    },
  },

  {
    contentComponent:DrawerData,
    drawerBackgroundColor:'#008080',
    drawerType:'slide',
    drawerWidth:250
  
  },

{
    navigationOptions:HeaderButton,
 
},


);

const AppStack3 = createSwitchNavigator({
    Login:{
      screen:AppStack
    },
    DrawerData:{
      screen:Drawer
    },

}
);



const Third = createAppContainer(AppStack3);
 export default Third;









