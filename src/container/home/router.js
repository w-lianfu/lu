import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from './index'
import Found from '../found'

let HomeRouter = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Found: {
    screen: Found,
    navigationOptions: {
      title: 'Found'
    }
  }
})

export default HomeRouter
