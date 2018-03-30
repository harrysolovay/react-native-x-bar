import React, { Component } from 'react'
import { ScrollView, View, Text as ReactNativeText, Image, StyleSheet } from 'react-native'
import XBar from 'react-native-x-bar'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

const Text = props => (
  <ReactNativeText
    { ...props }
    style={[ styles.text, props.style ]}
  />
)

class App extends Component {

  render() {
    return (
      <View style={ styles.flex }>
        <View style={ styles.statusBarBackground } />
        <ScrollView contentContainerStyle={ styles.main }>

          <XBar
            left={
              <Image
                source={ require('./assets/menu.png') }
                style={{
                  width : 18
                }}
                resizeMode='contain'
              />
            }
            center={
              <Image
                source={ require('./assets/logo.png') }
                style={{
                  width : 18
                }}
                resizeMode='contain'
              />
            }
            right={
              <Image
                source={ require('./assets/cart.png') }
                style={{
                  width : 16
                }}
                resizeMode='contain'
              />
            }
            layout='absolute center'
            containerStyle={[ styles.container, { backgroundColor : '#000', borderColor : '#000' } ]}
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={[ styles.centerSlot, { paddingTop : 2, paddingBottom : 4 } ]}
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={
              <Image
                source={ require('./assets/avatar.png') }
                style={ styles.avatar }
              />
            }
            centerTop={ <Text>Harry Solovay</Text> }
            centerBottom={ <Text>@hsolvz</Text> }
            right={
              <Ionicons
                name='ios-more-outline'
                color='#000'
                size={ 30 }
                style={{ paddingTop : 3 }}
              />
            }
            layout='lean left'
            containerStyle={ styles.container }
            leftSlotStyle={{ padding : 8 }}
            centerSlotStyle={ styles.multiSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={
              <Ionicons
                name='ios-arrow-round-back'
                color='#000'
                size={ 34 }
                style={{ paddingTop : 3 }}
              />
            }
            center={ <Text>Page Title</Text> }
            right={
              <Ionicons
                name='ios-arrow-down'
                color='#000'
                size={ 15 }
                style={{ paddingTop : 3 }}
              />
            }
            layout='absolute center'
            containerStyle={[ styles.container, { paddingTop : 3, paddingBottom : 3 } ]}
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            centerTop={ <Text style={{ color : '#4a90e2' }}>Jony Ive</Text> }
            centerBottom={ <Text>followed you</Text> }
            right={ <Text style={{ color : '#4a90e2' }}>follow back</Text> }
            layout='lean left'
            containerStyle={ styles.container }
            leftSlotStyle={{ padding : 8 }}
            centerSlotStyle={ styles.multiSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={
              <Ionicons
                name='ios-disc-outline'
                color='#000'
                size={ 25 }
                style={{ paddingTop : 3 }}
              />
            }
            center={
              <Ionicons
                name='ios-aperture-outline'
                color='#4a90e2'
                size={ 25 }
                style={{ paddingTop : 3 }}
              />
            }
            right={
              <Ionicons
                name='ios-contact-outline'
                color='#000'
                size={ 25 }
                style={{ paddingTop : 3 }}
              />
            }
            layout='space equal'
            containerStyle={ styles.container }
            slotStyle={{ paddingTop : 8, paddingBottom : 8 }}
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='lean left'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='lean right'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='space between'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='absolute center'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='space around'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='space equal'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='absolute center'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center</Text> }
            right={ <Text>right</Text> }
            layout='space evenly'
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
          />

          <XBar
            left={ <Text>left</Text> }
            centerTop={ <Text>centerTop</Text> }
            centerBottom={ <Text>centerBottom</Text> }
            right={ <Text>right</Text> }
            layout='lean left'
            containerStyle={ styles.container }
            slotStyle={ styles.multiSlot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            center={ <Text>center component can extend beyond the horizontal bounds of the parent container</Text> }
            right={ <Text>right</Text> }
            layout='lean left'
            overflow={ LinearGradient }
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            center={ <Text>No need to assign "left" or "right" to a component(s) – "center" is required when using "overflow"</Text> }
            right={ <Text>right</Text> }
            layout='lean left'
            overflow={ LinearGradient }
            containerStyle={ styles.container }
            slotStyle={ styles.slot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

          <XBar
            left={ <Text>left</Text> }
            centerTop={ <Text>You can also overflow when using centerTop and centerBottom props</Text> }
            centerBottom={ <Text>works like a charm</Text> }
            right={ <Text>right</Text> }
            layout='lean left'
            overflow={ LinearGradient }
            containerStyle={ styles.container }
            slotStyle={ styles.multiSlot }
            leftSlotStyle={ styles.leftSlot }
            centerSlotStyle={ styles.centerSlot }
            rightSlotStyle={ styles.rightSlot }
          />

        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  flex : { flex : 1 },
  statusBarBackground : {
    backgroundColor : '#f5f5f5',
    height : Constants.statusBarHeight,
    borderColor : '#e9e9e9',
    borderBottomWidth : 1
  },
  main : {
    paddingTop : 15,
    paddingRight : 15,
    paddingBottom : 30,
    paddingLeft : 15
  },
  text : { fontFamily : 'Helvetica-Light' },
  container : {
    borderWidth : 1,
    borderColor : '#ddd',
    backgroundColor : '#fcfcfc',
    marginTop : 15
  },
  slot : {
    paddingTop : 15,
    paddingBottom : 15
  },
  multiSlot : {
    paddingTop : 7,
    paddingBottom : 7
  },
  leftSlot : {
    paddingLeft : 15
  },
  centerSlot : {
    paddingRight : 15,
    paddingLeft : 15
  },
  rightSlot : {
    paddingRight : 15
  },
  avatar : {
    width : 30,
    height : 30,
    borderRadius : 15
  }
})

export default App