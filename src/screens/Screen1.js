import React, {Component} from 'react';
import { createAppContainer, StackNavigator  } from 'react-navigation'; 
import {StyleSheet, View, Text, Image } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import Home_Activity from '../screens/pages/Home_Activity';
import Settings_Activity from '../screens/pages/Settings_Activity';
import Details_Activity from '../screens/pages/Details_Activity';
import Profile_Activity from '../screens/pages/Profile_Activity';
 
const HomeTab = createStackNavigator(
  {
    Home: Home_Activity ,
    Details: Details_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);
 
const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity ,
    Details: Details_Activity ,
    Profile: Profile_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);
 
const MainApp = createBottomTabNavigator(
{
    Home: HomeTab,
    Settings: SettingsTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('../images/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else {
          return (
            <Image
              source={ require('../images/settings.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
 
 
export default createAppContainer(MainApp);
// import React, { Component } from 'react';
// //import react in our code.
// import { StyleSheet, View, Text } from 'react-native';
// // import all basic components
 
// export default class Screen1 extends Component {
//   //Screen1 Component
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <Text style={{ fontSize: 23 }}> Screen {global.currentScreenIndex + 1} </Text>
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     paddingTop: 20,
//     alignItems: 'center',
//     marginTop: 50,
//     justifyContent: 'center',
//   },
// });


// dsdvsdsd
// import React, {Component} from 'react';
 
// import {StyleSheet, View, Text, Image } from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
 
// import { createAppContainer, } from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
 
// import Home_Activity from './pages/Home_Activity';
// import Settings_Activity from './pages/Settings_Activity';
// import Details_Activity from './pages/Details_Activity';
// import Profile_Activity from './pages/Profile_Activity';
 
// export default class Screen1 extends Component {
  
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <Text style={{ fontSize: 23 }}> Screen {global.currentScreenIndex + 1} </Text>
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     paddingTop: 20,
//     alignItems: 'center',
//     marginTop: 50,
//     justifyContent: 'center',
//   },
// });
// const HomeTab = createStackNavigator(
//   {
//     Home: Home_Activity ,
//     Details: Details_Activity,
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
//               source={ require('../images/home.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         } else {
//           return (
//             <Image
//               source={ require('../images/settings.png') }
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
