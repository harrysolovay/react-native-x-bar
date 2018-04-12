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

class Groups extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          onBackPress={ this.props.navigation.goBack }
          title='GROUPS'
        />
        <ScrollView contentContainerStyle={{ paddingBottom : 45 }}>

          <Description>{ `Use groups to add nuances to the layout (that would otherwise require dozens of lines of boilerplate styling) – works with any number of slots` }</Description>
          
          <Description>{ `setting 'groups' prop to [0, 1] will group the first and second slots (assigned 'layout' prop to 'space between')` }</Description>

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
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

          <Description>{ `setting 'groups' prop to [0, 1] will group the second and third slots (assigned 'layout' prop to 'space between')` }</Description>

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
            groups={[ 1, 2 ]}
            style={ styles.bar }
          />

          <Description>{ `setting 'groups' prop to [1, 2] will group the second and third slots (assigned 'layout' prop to 'space between')` }</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>fourth</Text> }
              ]
            ]}
            layout='space between'
            groups={[ 1, 2 ]}
            style={ styles.bar }
          />

          <Description>{ `...works with other layouts as well ('space evenly' for example)` }</Description>

          <XBar
            slots={[
              { style : styles.slots },
              [
                { children : <Text>one</Text> },
                { children : <Text>two</Text> },
                { children : <Text>three</Text> },
                { children : <Text>fourth</Text> }
              ]
            ]}
            layout='space evenly'
            groups={[ 1, 2 ]}
            style={ styles.bar }
          />

        </ScrollView>
      </View>
    )
  }
}

export default Groups