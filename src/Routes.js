import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import splash from '../src/splash';
import Navigator from '../src/screens/Drawer';
// import Login1 from './Pages/login1';
// import Login from './Users/login';
// import Signup from './Users/signup'
// import Profile from './Users/Profile';
// import Home from './Home/Home' ;

// import List from './Home/List'

export default class Routes extends Component {
    render() {
        return <AppContainer />;
    }
}
const AppNavigator = createStackNavigator({

    Splash: {
        screen: splash
    },
    Navigator: {
        screen: Navigator,
    },

    // Login1: {
    //     screen: Login1,
    // },
    // First: {
    //     screen: Login,
    // },
    // Signup: {
    //     screen: Signup,
    // },
    // Profile:
    // {
    //     screen: Profile,
    // },

    // Home: { screen: app },
    // Request: { screen: Request },
    // List: { screen: List }



},
    //Navigation Options
    {
        initialRouteName: 'Splash',
        header: null,
        headerMode: 'none'
    })




//     FirstScreen:
//     {
//       screen:First,
//       navigationOptions:{
//         intialRoute:First,
//         // title:'splash',
//         headerShown:false
//       }
//     },
//     Second:{
//         screen:Second,
//         navigationOptions:{
//           // title:'splash',
//           headerShown:false
//       },
//     },
//       ThirdScreen:{
//        screen:Login,
//         navigationOptions:{
//           // title:'splash',
//           headerShown:false

//       },
//     },
//     example:{
//         screen: Example,
//     }


//   });
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});