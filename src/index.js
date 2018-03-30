import React, { PureComponent, Fragment } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity as ReactNativeTouchableOpacity } from 'react-native'
import color from 'onecolor'

const TouchableOpacity = props => (
  <ReactNativeTouchableOpacity
    activeOpacity={ 1 }
    { ...props }
  />
)

const ViewOrTouchable = props => props.onPress
  ? <TouchableOpacity { ...props } />
  : <View { ...props } />

const Fade = props => {
  const { FadeComponent } = props
  return (
    <TouchableOpacity
      onPress={ props.onPress }
      style={[
        styles.fade,
        styles.absolute,
        props.style
      ]}
    >
      <FadeComponent
        start={[ 0, 1 ]}
        end={[ 1, 1 ]}
        colors={[ props.from, props.to ]}
        style={[
          styles.flex,
          styles.stretch
        ]}
      />
    </TouchableOpacity>
  )
}
  
const Scroller = props => {
  return (
    <Fragment>
      {
        !!props.FadeComponent &&
          <Fade
            FadeComponent={ props.FadeComponent }
            from={ props.fadeColors[0] }
            to={ props.fadeColors[1] }
            style={ styles.absoluteLeft }
            onPress={ props.onPress }
          />
      }
      <FlatList
        horizontal={ true }
        data={[ props.children ]}
        renderItem={ ({ item }) => (
          <TouchableOpacity
            onPress={ props.onPress }
          >
            { item }
          </TouchableOpacity>
        )}
        keyExtractor={ (item, index) => index.toString() }
        contentContainerStyle={[
          styles.column,
          styles.justifyCenter,
          props.style
        ]}
        showsHorizontalScrollIndicator={ false }
        showsVerticalScrollIndicator={ false }
      />
      {
        !!props.FadeComponent &&
          <Fade
            FadeComponent={ props.FadeComponent }
            from={ props.fadeColors[1] }
            to={ props.fadeColors[0] }
            style={ styles.absoluteRight }
            onPress={ props.onPress }
          />
      }
    </Fragment>
  )
}

const Slot = props => (
  <ViewOrTouchable
    { ...props }
    style={[
      styles.stretch,
      styles.justifyCenter,
      props.style
    ]}
  />
)

const SlotGroup = props => (
  <View
    { ...props }
    style={[
      styles.stretch,
      styles.row,
      styles.flex,
      props.style
    ]}
  />
)  
  
const LeanLeft = ({ slots }) => (
  <Fragment>
    <SlotGroup style={ styles.justifyStart }>
      { slots[0] }
      { slots[1] }
    </SlotGroup>
    { slots[2] }
  </Fragment>
)

const LeanRight = ({ slots }) => (
  <Fragment>
    { slots[0] }
    <SlotGroup style={ styles.justifyEnd }>
      { slots[1] }
      { slots[2] }
    </SlotGroup>
  </Fragment>
)

const SpaceBetween = ({ slots }) => (
  <View
    style={[
      styles.flex,
      styles.row,
      styles.justifySpaceBetween
    ]}
  >
    { slots }
  </View>
)

class AbsoluteCenter extends PureComponent {

  state = { height : null }

  render() {

    const slots = [{
      component : this.props.slots[0],
      style : [ styles.absolute, styles.absoluteLeft ]
    }, {
      component : this.props.slots[1],
      style : [
        styles.flex,
        styles.row,
        styles.justifyCenter,
        this.state
      ]
    }, {
      component : this.props.slots[2],
      style : [ styles.absolute, styles.absoluteRight ]
    }]

    return (
      <Fragment>
        {
          slots.map((slot, i) => (
            <View
              style={ slot.style }
              onLayout={ this._updateContainerHeight }
              key={ i }
            >
              { slot.component }
            </View>
          ))
        }
      </Fragment>
    )

  }

  _updateContainerHeight = (e) => {
    if(e.nativeEvent.layout.height > this.state.height)
      this.setState({ height : e.nativeEvent.layout.height })
  }

}

const SpaceAround = ({ slots }) => (
  <View
    style={[
      styles.flex,
      styles.row,
      styles.justifySpaceAround
    ]}
  >
    { slots }
  </View>
)

const SpaceEqual = ({ slots }) => (
  <Fragment>
    {
      slots.map((slot, i) => (
        <View
          style={[
            styles.flex,
            styles.row,
            styles.justifyCenter
          ]}
          key={ i }
        >
          { slot }
        </View>
      ))
    }
  </Fragment>
)

const SpaceEvenly = ({ slots }) => (
  <View
    style={[
      styles.flex,
      styles.row,
      styles.justifySpaceBetween
    ]}
  >
    <View/>
    <View/>
    { slots[0] }
    <View/>
    { slots[1] }
    <View/>
    { slots[2] }
    <View/>
    <View/>
  </View>
)

const LAYOUTS = {

  'lean left' : LeanLeft,
  'lean right' : LeanRight,

  'space between' : SpaceBetween,
  'absolute center' : AbsoluteCenter,

  'space around' : SpaceAround,
  'space equal' : SpaceEqual,
  'space evenly' : SpaceEvenly

}

const XBar = ({

  left,
  center : centerComponent,
  centerTop,
  centerBottom,
  right,

  containerOnPress,
  leftSlotOnPress,
  centerSlotOnPress,
  centerTopSlotOnPress,
  centerBottomSlotOnPress,
  rightSlotOnPress,

  containerStyle,
  slotStyle,
  leftSlotStyle,
  centerSlotStyle,
  centerTopSlotStyle,
  centerBottomSlotStyle,
  rightSlotStyle,

  layout, overflow

}) => {

  Array(
    {
      condition : !!!layout,
      message : 'Must define "layout" property'
    }, {
      condition : !!centerComponent && ( !!centerTop || !!centerBottom ),
      message : 'cannot use both "center" and "centerTop"+"centerBottom" props together'
    }, {
      condition : !!centerTop && !!!centerBottom || !!!centerTop && !!centerBottom,
      message : 'if not using both "centerTop" and "centerBottom" props, use center prop instead'
    }, {
      condition : !!overflow && !(!!centerComponent || !!centerTop || !!centerBottom),
      message : 'must set center or "centerTop"+"centerBottom" in order to make use of "overflow" prop'
    }, {
      condition : !!containerOnPress && (!!leftSlotOnPress || !!centerSlotOnPress || !!centerTopSlotOnPress || !!centerBottomSlotOnPress || !!rightSlotOnPress),
      message : 'cannot have "onPress" for slot(s) and container simultaneously'
    }, {

    }
  ).forEach(({ condition, message }) => {
    if(condition)
      throw new Error(message)
  })

  let containerBackgroundColor, fadeColors
  if(typeof overflow == 'function') {
    containerBackgroundColor = StyleSheet.flatten(containerStyle).backgroundColor
    if(color(containerBackgroundColor).alpha() < 1)
      console.warn('Assigning containerStyle with backgroundColor with alpha < 1 can diminish the aesthetic (noticeable divide between slots)')
    fadeColors = [ containerBackgroundColor, color(containerBackgroundColor).alpha(0).cssa() ]
  }

  const center = (component => {
    return !!overflow
      ? (
        <Scroller
          FadeComponent={ typeof overflow == 'function' ? overflow : null }
          fadeColors={ fadeColors }
          style={ centerSlotStyle }
          onPress={ containerOnPress || centerSlotOnPress }
        >
          { component }
        </Scroller>
      ) : component
  })(centerComponent || (
    <Fragment>
      <ViewOrTouchable
        style={ centerTopSlotStyle }
        onPress={ centerTopSlotOnPress }
      >
        { centerTop }
      </ViewOrTouchable>
      <ViewOrTouchable
        style={ centerBottomSlotStyle }
        onPress={ centerBottomSlotOnPress }
      >
        { centerBottom }
      </ViewOrTouchable>
    </Fragment>
  ))

  const slots = [{
    style : [ slotStyle, leftSlotStyle ],
    onPress : leftSlotOnPress,
    component : left
  }, {
    style : [
      overflow
        ? styles.flex
        : centerSlotStyle,
      slotStyle
    ],
    onPress : centerSlotOnPress,
    component : center
  },{
    style : [ slotStyle, rightSlotStyle ],
    onPress : rightSlotOnPress,
    component : right
  }].map((slot, i) => (
    <Slot
      style={ slot.style }
      onPress={
        i == 1 && overflow
          ? null
          : containerOnPress || slot.onPress
      }
      key={ i }
    >
      { slot.component }
    </Slot>
  ))

  const Layout = LAYOUTS[layout]
  return !!Layout
    ? (
      <ViewOrTouchable
        onPress={ !overflow && containerOnPress }
        style={[
          styles.row,
          styles.containerStyle,
          containerStyle
        ]}
      >
        <Layout { ...{ slots } } />
      </ViewOrTouchable>
    ) : null

}

const styles = StyleSheet.create({

  row : { flexDirection : 'row' },
  column : { flexDirection : 'column' },

  flex : { flex : 1 },
  stretch : { alignSelf : 'stretch' },

  justifyStart : { justifyContent : 'flex-start' },
  justifyCenter : { justifyContent : 'center' },
  justifyEnd : { justifyContent : 'flex-end' },
  justifySpaceBetween : { justifyContent : 'space-between' },
  justifySpaceAround : { justifyContent : 'space-around' },

  absolute : {
    position : 'absolute',
    justifyContent : 'center',
    alignItems : 'center'
  },
  absoluteLeft : { left : 0, zIndex : 1 },
  absoluteCenter : { top : 0, left : 0, right : 0, bottom : 0, zIndex : 0 },
  absoluteRight : { right : 0, zIndex : 1 },

  containerStyle : {
    alignSelf : 'stretch',
    alignItems : 'center'
  },

  fade : {
    top : 0, bottom : 0,
    width : 20
  }

})

export default XBar