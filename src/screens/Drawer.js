import React, { Component } from 'react';
//import react in our code.
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,

} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 
//Import all the screens
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import splash from '../splash';
 
//Import Custom Sidebar
// import CustomSidebarMenu from '..CustomSidebarMenu';
 import CustomSidebarMenu from '../../CustomSidebarMenu';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailScreen';
import SettingsScreen from './pages/SettingScreen';
import ProfileScreen from './pages/ProfileScreen';
global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Drawer Navigator Which will provide the structure of our App
const DrawerN = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

// Buttom navigation 
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
       screen: HomeScreen
      },

    Details: {
       screen: DetailsScreen
      },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
 
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
 
const App = createBottomTabNavigator({
    //Defination of Navigaton bottom options
    Home: { screen: HomeScreen},
    Settings: { screen: SettingsScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('../images/logo1.png')
                  : require('../images/logo2.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? require('../images/logo1.png')
                  : require('../images/logo4.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
// end buttom
const Appcontainer=createAppContainer(DrawerN);
export default class Drawer extends Component {
  render(){
  return(
            <Appcontainer/>
  );
}
}