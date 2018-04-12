import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import XBar from 'react-native-x-bar'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import { Header, Text } from './components'

import {
  Home,
  UseCases,
  Layouts,
  Groups,
  Overflowing,
  PressHandling,
  Styling
} from './screens'


const options = () => ({
  navigationOptions : {
    header : null
  },
  cardStyle : { backgroundColor : '#fff' }
})

const Stack = StackNavigator({
  home : { screen : Home },
  useCases : { screen : UseCases },
  layouts : { screen : Layouts },
  groups : { screen : Groups },
  overflowing : { screen : Overflowing },
  pressHandling : { screen : PressHandling },
  styling : { screen : Styling }
}, options())


class App extends Component {

  state = {
    assetsLoading : true
  }

  render() {
    return this.state.assetsLoading
      ? (
        <AppLoading
          startAsync={ this.load }
          onError={ console.error }
          onFinish={ () => this.setState({ assetsLoading : false }) }
        />
      ) : <Stack />
  }

  load = async() => (
      Font.loadAsync({
        'FuturaLTBook' : require('./assets/FuturaLT-Book.ttf')
      })
  )

}

export default App