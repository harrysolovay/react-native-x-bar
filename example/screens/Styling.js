import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import { Header, Text, Description } from '../components'
import XBar from 'react-native-x-bar'
import { LinearGradient } from 'expo'

const styles = StyleSheet.create({

  bar : {
    borderWidth : 1,
    borderColor : '#ddd',
    backgroundColor : '#fcfcfc',
    marginTop : 15,
    marginRight : 15,
    marginLeft : 15
  },

  slots : {
    padding : 15,
    borderColor : '#ddd',
    borderWidth : 1
  },

  hasTwoTextChildren : {
    paddingVertical : 6.5,
    paddingHorizontal : 15
  }

})

class Styling extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          onBackPress={ this.props.navigation.goBack }
          title='MAKE IT PRETTY'
        />
        <ScrollView contentContainerStyle={{ paddingBottom : 45 }}>
          
          <Description>{`with no styling, here's how an XBar might look:
          `}</Description>

          <XBar
            slots={[
              { children : <Text>one</Text> },
              { children : <Text>two</Text> },
              { children : <Text>three</Text> }
            ]}
            layout='space between'
          />

          <Description>{`now, lets apply a border, backgroundColor and a margin to the XBar with its style prop`}</Description>

          <XBar
            slots={[
              { children : <Text>one</Text> },
              { children : <Text>two</Text> },
              { children : <Text>three</Text> }
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>{`now, lets give each slot some padding and a border`}</Description>

          <XBar
            slots={[
              {
                style : styles.slots
              },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>{`now, lets give each individual slot a unique color`}</Description>

          <XBar
            slots={[
              {
                style : styles.slots
              },
              [
                {
                  children : <Text>one</Text>,
                  style : { backgroundColor : 'yellow' }
                },
                {
                  children : <Text>two</Text>,
                  style : { backgroundColor : 'red' }
                },
                {
                  children : <Text>three</Text>,
                  style : { backgroundColor : 'orange' }
                }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>Let's do the same thing, but with an XBar that has an overflown slot</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                {
                  children : <Text>one</Text>,
                  style : { backgroundColor : 'yellow' }
                },
                {
                  children : <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>,
                  overflow : {
                    effect : 'fade',
                    effectConfig : {
                      LinearGradient,
                      color : 'red'
                    }
                  },
                  style : { backgroundColor : 'red' }
                },
                {
                  children : <Text>three</Text>,
                  style : { backgroundColor : 'orange' }
                }
              ]
            ]}
            style={ styles.bar }
          />

        </ScrollView>
      </View>
    )
  }
}

export default Styling