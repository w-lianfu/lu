import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  _toAIMoney = () => {
    this.props.navigation.navigate('AIMoney')
  }

  render() {
    return (
      <View>
        <Text>Home Page</Text>
        <Text>Home Page</Text>
        <Button title='AIMoney' onPress={this._toAIMoney} />
      </View>   
    )
  }
}

let Home = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '陆金所'
    }
  }
})

export default Home
