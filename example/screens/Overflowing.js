import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
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

class Overflowing extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          onBackPress={ this.props.navigation.goBack }
          title='OVERFLOWING'
        />
        <ScrollView contentContainerStyle={{ paddingBottom : 45 }}>

          <Description>{ `use 'overflow' inside of a given slot's config to make it horizontally scrollable (cannot use on a grouped slot)` }</Description>
          
          <Description>{ `create overflown container with a red fade effect` }</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                {
                  children : <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>,
                  overflow : {
                    effect : 'fade',
                    effectConfig : {
                      width : 30,
                      color : 'red',
                      LinearGradient
                    }
                  }
                },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>{ `with the 'showIndicator' prop set to true and the effect prop set to 'clip'` }</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                {
                  children : <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>,
                  overflow : {
                    effect : 'clip',
                    showIndicator : true
                  }
                },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <Description>{ `with two children in the overflown slot` }</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                {
                  children : [
                    <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>,
                    <Text>two – can be the slot that we want to overflow––as you can see, it can overflow forever and ever and ever... but not actually forever... there are limits to computational processing :) oh well. Still gets the job done</Text>
                  ],
                  overflow : {
                    effect : 'fade',
                    effectConfig : {
                      LinearGradient
                    }
                  }
                },
                { children : <Text>three</Text> }
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

export default Overflowing