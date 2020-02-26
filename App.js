import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './src/Routes'
// import Form from './Form'
// import Drawer from './src/screens/Drawer'
// import Home from './src/screens/home'
export class App extends Component {
  render() {
    return (
    <Routes/>
  
    )
  }
}


export default App


// import React, {Component} from 'react';
// import {StyleSheet, View, Text, Image } from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
 
// import { createAppContainer, } from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
 
// import Home_Activity from './src/screens/pages/Home_Activity';
// import Settings_Activity from './src/screens/pages/Settings_Activity';
// import Details_Activity from './src/screens/pages/Details_Activity';
// import Profile_Activity from './src/screens/pages/Profile_Activity';
 
// const HomeTab = createStackNavigator(
//   {
//     Home: Home_Activity ,
//     Details: Details_Activity ,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#0091EA',
//       },
//       headerTintColor: '#fff',
//       title: 'Home Tab',
     
//     },
//   }
// );
 
// const SettingsTab = createStackNavigator(
//   {
//     Settings: Settings_Activity ,
//     Details: Details_Activity ,
//     Profile: Profile_Activity ,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#0091EA',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Settings Tab',
     
//     },
//   }
// );
 
// const MainApp = createBottomTabNavigator(
//   {
//     Home: HomeTab ,
//     Settings: SettingsTab ,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         if (routeName === 'Home') {
//           return (
//             <Image
//               source={ require('./src/images/home.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         } else {
//           return (
//             <Image
//               source={ require('./src/images/settings.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//         }
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#FF6F00',
//       inactiveTintColor: '#263238',
//     },
//   }
// );
 
 
// export default createAppContainer(MainApp);
