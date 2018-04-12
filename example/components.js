import React from 'react'
import { TouchableOpacity, View, Text as ReactNativeText } from 'react-native'
import XBar from 'react-native-x-bar'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

const Text = props => (
  <ReactNativeText
    { ...props }
    style={[
      {
        fontFamily : 'FuturaLTBook',
        fontSize : 14
      },
      props.header ? { fontSize : 18 } : null,
      props.sub ? {
        fontFamily : 'Helvetica-Light',
        fontSize : 13
      } : null,
      props.style
    ]}
  />
)

const ViewOrTouchable = props => (
  props.onPress
    ? (
      <TouchableOpacity
        activeOpacity={ 1 }
        { ...props }
      />
    ) : (
      <View
        { ...props }
      />
    )
)

const Header = ({ layout, title, onBackPress, onDotsPress }) => (
  <View style={{
    paddingTop : Constants.statusBarHeight,
    borderColor : '#ddd',
    borderBottomWidth : 1,
    backgroundColor : '#fcfcfc'
  }}>
    <XBar
      slots={[
        {
          children : (
            onBackPress &&
              <Ionicons
                name='ios-arrow-round-back'
                size={ 40 }
              />
          ),
          style : { marginLeft : 15 },
          onPress : () => onBackPress(),
          activeOpacity : .5
        },
        {
          children : <Text header>{ title }</Text>
        },
        {
          children : null,
          style : { marginRight : 15 }
        }
      ]}
      layout='absolute center'
      style={{ height : 45 }}
    />
  </View>
)

Description = props => (
  <Text
    sub
    { ...props }
    style={[
      {
        paddingTop : 30,
        paddingHorizontal : 15,
        paddingBottom : 0,
        fontSize : 16,
        lineHeight : 24
      },
      props.style
    ]}
  />
)

export {
  Text,
  ViewOrTouchable,
  Header,
  Description
}