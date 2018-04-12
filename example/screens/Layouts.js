import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Header, Text, Description } from '../components'
import XBar from 'react-native-x-bar'

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

class Layouts extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          onBackPress={ this.props.navigation.goBack }
          title='LAYOUTS'
        />
        <ScrollView contentContainerStyle={{ paddingBottom : 45 }}>

          <Description>{ `slots align left by default when no layout prop is set (to align right, set XBar's 'style' prop to { justifyContent : 'flex-end' } )` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            style={ styles.bar }
          />
          
          <Description>{ `'layout' prop set to 'absolute center'––absolutely centers the 2nd slot or group within the container (works as unintended if there aren't 3 groups, or if not using groups and there aren't 3 slots)––centered slot is positioned absolutely, meaning that the container will not adjust to its height (use XBar 'style' prop to set fixed height if center slot height is greater than that of other slots)` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='absolute center'
            style={ styles.bar }
          />
      
          <Description>{ `'layout' prop set to 'space between'` }</Description>
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
            style={ styles.bar }
          />
      
          <Description>{ `'layout' prop set to 'space equal'––each slot or group is centered within its equally-divided portion of the parent container` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space equal'
            style={ styles.bar }
          />
      
          <Description>{ `'layout' prop set to 'space around'` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space around'
            style={ styles.bar }
          />
          
          <Description>{ `'layout' prop set to 'space evenly'` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space evenly'
            style={ styles.bar }
          />

          <Description>{ `set the given slot's children equal to an array of components for a slot with multiple components lain out vertically` }</Description>
          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                {
                  children : [
                    <Text>two</Text>,
                    <Text>two point five</Text>
                  ]
                },
                { children : <Text>three</Text> }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />
      
          <Description>{ `examples with eight slots and 'layout' prop set to 'space between', 'space equal', 'space around' and 'space evenly' respectively` }</Description>
          
          <XBar
            slots={[
              {
                style : {
                  paddingTop : 20,
                  paddingBottom : 20,
                  borderColor : '#ddd',
                  borderWidth : 1
                }
              }, [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>four</Text> },
                { children : <Text>five</Text> },
                { children : <Text>six</Text> },
                { children : <Text>seven</Text> },
                { children : <Text>eight</Text> }
              ]
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                style : {
                  paddingTop : 20,
                  paddingBottom : 20,
                  borderColor : '#ddd',
                  borderWidth : 1
                }
              }, [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>four</Text> },
                { children : <Text>five</Text> },
                { children : <Text>six</Text> },
                { children : <Text>seven</Text> },
                { children : <Text>eight</Text> }
              ]
            ]}
            layout='space equal'
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                style : {
                  paddingTop : 20,
                  paddingBottom : 20,
                  borderColor : '#ddd',
                  borderWidth : 1
                }
              }, [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>four</Text> },
                { children : <Text>five</Text> },
                { children : <Text>six</Text> },
                { children : <Text>seven</Text> },
                { children : <Text>eight</Text> }
              ]
            ]}
            layout='space around'
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                style : {
                  paddingTop : 20,
                  paddingBottom : 20,
                  borderColor : '#ddd',
                  borderWidth : 1
                }
              }, [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>four</Text> },
                { children : <Text>five</Text> },
                { children : <Text>six</Text> },
                { children : <Text>seven</Text> },
                { children : <Text>eight</Text> }
              ]
            ]}
            layout='space evenly'
            style={ styles.bar }
          />

        </ScrollView>
      </View>
    )
  }
}

export default Layouts