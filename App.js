import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './src/Routes'
export class App extends Component {
  render() {
    return (
   <Routes/>
    )
  }
}

export default App

// export default createAppContainer(App);
 

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import splash from './src/screens/splash';
// import SignUp from "./src/screens/SignUp";
// import Drawer from './src/screens/Drawer';
// import Routes from './src/screens/Routes';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <Routes/>
//     );
//   }
// }
// export default App;