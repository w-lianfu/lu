import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './container/home'
import AIMoney from './container/home/aiMoney'

let App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home'
    })
  },
  AIMoney: {
    screen: AIMoney,
    navigationOptions: {
      title: 'AIMoney'
    }
  }
}, {
  headerMode: 'none'
})

export default App
