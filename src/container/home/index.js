import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './home'
import Money from '../money'
import Found from '../found'
import My from '../my'

import Colors from '../../lib/style/color'

let Home = TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={25} color={tintColor} />
      )
    }
  },
  Money: {
    screen: Money,
    navigationOptions: {
      title: '理财',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-star' : 'ios-star-outline'} size={25} color={tintColor} />
      )
    }
  },
  Found: {
    screen: Found,
    navigationOptions: {
      title: '发现',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-navigate' : 'ios-navigate-outline'} size={25} color={tintColor} />
      )
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      title: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={25} color={tintColor} />
      )
    }
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: Colors.c333,
    inactiveTintColor: Colors.c666,
    labelStyle: {
      fontSize: 12,
      marginBottom: 3
    },
    style: {
      borderTopColor: Colors.ccc
    }
  }
})

export default Home
