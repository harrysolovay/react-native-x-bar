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

class PressHandling extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          onBackPress={ this.props.navigation.goBack }
          title='PRESS HANDLING'
        />
        <ScrollView contentContainerStyle={{ paddingBottom : 45 }}>
          
          <Description>attach an onPress handler to individual slots</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                {
                  children : <Text>one</Text>,
                  onPress : () => Alert.alert('slot one pressed')
                },
                {
                  children : <Text>two</Text>,
                  onPress : () => Alert.alert('slot two pressed')
                },
                {
                  children : <Text>three</Text>,
                  onPress : () => Alert.alert('slot three pressed')
                }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>attach the same onPress handler to all slots</Description>

          <XBar
            slots={[
              {
                onPress : () => Alert.alert('a slot was pressed'),
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

          <Description>attach an onPress handler to the entire X Bar</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space between'
            onPress={ () => Alert.alert('X Bar pressed') }
            style={ styles.bar }
          />

          <Description>attach handlers to any combination, simultaneously</Description>

          <XBar
            slots={[
              {
                onPress : () => Alert.alert('a slot was pressed'),
                style : styles.slots
              },
              [
                {
                  children : <Text>one</Text>,
                  onPress : () => Alert.alert('slot one pressed')
                },
                {
                  children : <Text>two</Text>,
                  onPress : () => Alert.alert('slot two pressed')
                },
                {
                  children : <Text>three</Text>,
                  onPress : () => Alert.alert('slot three pressed')
                }
              ]
            ]}
            layout='space between'
            onPress={ () => Alert.alert('X Bar pressed') }
            style={ styles.bar }
          />

          <Description>Works even if the slot is overflown</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                {
                  children : <Text>one</Text>,
                  onPress : () => Alert.alert('pressed one')
                },
                {
                  children : <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>,
                  overflow : {
                    effect : 'fade',
                    effectConfig : {
                      LinearGradient
                    }
                  },
                  onPress : () => Alert.alert('pressed two')
                },
                {
                  children : <Text>three</Text>,
                  onPress : () => Alert.alert('pressed three')
                }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

        </ScrollView>
      </View>
    )
  }
}

export default PressHandling