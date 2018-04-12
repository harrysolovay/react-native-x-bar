import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Header, Text, ViewOrTouchable } from '../components'
import XBar from 'react-native-x-bar'
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo'

class Home extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          title={ 'X BAR = COOL' }
        />
        <ScrollView contentContainerStyle={ styles.scrollView }>
          {
            [
              { onPress : () => { WebBrowser.openBrowserAsync('https://github.com/harrysolovay/react-native-x-bar/blob/master/README.md') }, title : 'DOCUMENTATION', subtitle : `every block of this app's UI is an X Bar` },
              { onPress : () => { WebBrowser.openBrowserAsync('https://github.com/harrysolovay/react-native-x-bar/tree/master/example') }, title : `THIS APP'S SOURCE`, subtitle : `how examples in this app were coded` },
              { route : 'useCases', title : 'SOME USE CASES', subtitle : `real-world examples of where to use X Bar` },
              { route : 'layouts', title : 'LAYOUTS', subtitle : 'positioning options right out of the box' },
              { route : 'groups', title : 'GROUPS', subtitle : 'multiple components in the same slot' },
              { route : 'overflowing', title : 'OVERFLOWING', subtitle : 'beautiful, performant, scrollable bars' },
              { route : 'pressHandling', title : 'PRESS HANDLING', subtitle : 'multiple onPresses, coexisting' },
              { route : 'styling', title : 'MAKE IT PRETTY', subtitle : 'flexible & easy styling capabilities' }
            ].map(({ route, onPress, title, subtitle }, i) => (
              <XBar
                slots={[
                  {
                    children : [
                      <Text>{ title }</Text>,
                      <Text sub>{ subtitle }</Text>
                    ],
                    style : styles.textSlot
                  },
                  {
                    children : (
                      <Ionicons
                        name='ios-arrow-forward'
                        size={ 16 }
                      />
                    ),
                    style : styles.arrowSlot
                  }
                ]}
                layout='space between'
                style={ styles.bar }
                onPress={() => {
                  if(route) this.props.navigation.navigate(route)
                  if(onPress) onPress()
                }}
                activeOpacity={ .5 }
                key={ i }
              />
            ))
          }
          <View
            style={{
              flexDirection : 'row',
              justifyContent : 'center',
              paddingVertical : 30
            }}
          >
            <Text>MADE WITH</Text>
            <Ionicons name='md-heart' color='#ff69b4' style={{ fontSize : 16, paddingHorizontal : 5 }} />
            <Text>BY </Text>
            <ViewOrTouchable onPress={ () => WebBrowser.openBrowserAsync('http://harrysolovay.com') }>
              <Text style={{ color : '#4a90e2', borderBottomWidth : 1 }}>HARRY</Text>
            </ViewOrTouchable>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView : {
    paddingTop : 15,
    paddingBottom : 30
  },
  bar : {
    height : 60,
    borderColor : '#ddd',
    borderWidth : 1,
    marginTop : 15,
    marginRight : 15,
    marginLeft : 15,
    backgroundColor : '#fcfcfc'
  },
  textSlot : {
    paddingLeft : 12
  },
  arrowSlot : {
    paddingTop : 2.5,
    paddingRight : 22
  }
})

export default Home