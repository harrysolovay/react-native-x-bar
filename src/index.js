import React, { Fragment } from 'react'
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'
import onecolor from 'onecolor'
import PropTypes from 'prop-types'




/*
 * Using PropType definitions doesn't include the logic needed
 * to properly advise on XBar misuse (including version differences).
 * The following (devMessages and runDevMessages) handles generating
 * errors and warnings based on whether the props meet necessary criteria.
 */

const devMessages = {
  usingLegacyProp : (propName) => `You're using the prop ('${ propName }'), which is no longer valid as of the currently installed version of react-native-x-bar. Please either re-install react-native-x-bar with version 0.1.5 (which is stable & fully-functional), or adjust your usage to the updated react-native-x-bar library (which includes feature additions and can match all use cases of 0.1.5). For more information, please reach out to harrysolovay@gmail.com.`
}

/*
 * 'potentials' is an array of arrays, with the format:
 * [ show<Boolean>, type<String>, message<String> ]
 * valid values for type: 'error', 'warning'
 */

const runDevMessages = (potentials) => {
  potentials.forEach((potential) => {
    if(potential[0]) {
      switch(potential[1]) {
        case 'error' : throw new Error(potential[2])
        case 'warning' : console.warn(potential[2])
      }
    }
  })
}




const styles = {

  barContainer : { flexDirection : 'row' },
  layoutItem : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },

  'absolute center' : {
    barContainer : {},
    layoutItem : [
      {
        flex : 1,
        justifyContent : 'flex-start',
        zIndex : 1
      },
      {
        position : 'absolute',
        top : 0, right : 0, bottom : 0, left : 0,
        zIndex : 0,
        alignItems : 'center'
      },
      {
        flex : 1,
        justifyContent : 'flex-end',
        zIndex : 1
      }
    ]
  },

  'space between' : {
    barContainer : { justifyContent : 'space-between' },
    layoutItem : {}
  },

  'space around' : {
    barContainer : { justifyContent : 'space-around' },
    layoutItem : {}
  },

  'space evenly' : {
    barContainer : { justifyContent : 'space-evenly' },
    layoutItem : {}
  },

  'space equal' : {
    barContainer : {},
    layoutItem : { flex : 1 }
  }

}




const ViewOrTouchable = props => (
  props.onPress || props.activeOpacity
    ? (
      <TouchableOpacity
        { ...props }
      />
    ) : (
      <View
        { ...props }
      />
    )
)


const Fades = ({
  LinearGradient,
  width=20,
  color='#fff',
  onPress,
  activeOpacity
}) => (
  <Fragment>
    {
      ['left', 'right'].map((side, i) => (
        <ViewOrTouchable
          { ...{ onPress, activeOpacity } }
          style={{
            position : 'absolute',
            top : 0, bottom : 0,
            [side] : 0,
            zIndex : 1,
            width
          }}
          key={ i }
        >
          <LinearGradient
            start={[ 0, 1 ]}
            end={[ 1, 1 ]}
            colors={((alphaOne, alphaZero) => {
              switch(i) {
                case 0 : return [ alphaOne, alphaZero ]
                case 1 : return [ alphaZero, alphaOne ]
              }
            })(
              color,
              onecolor(color).alpha(0).cssa()
            )}
            style={{
              flex : 1,
              alignSelf : 'stretch'
            }}
          />
        </ViewOrTouchable>
      ))
    }
  </Fragment>
)


const Scroller = ({
  children,
  onPress,
  style,
  overflow : {
    effect,
    effectConfig,
    showIndicator=false
  },
  activeOpacity
}) => (
  <Fragment>
    {
      effect === 'fade' &&
        <Fades { ...{ onPress, ...effectConfig, activeOpacity } } />
    }
    <FlatList
      horizontal={ true }
      data={[ children ]}
      renderItem={({ item }) => (
        <ViewOrTouchable
          children={ item }
          { ...{ onPress, activeOpacity } }
        />
      )}
      keyExtractor={ (item, i) => i.toString() }
      contentContainerStyle={ style }
      showsHorizontalScrollIndicator={ showIndicator }
    />
  </Fragment>
)


const Slot = props => (
  props.overflow
    ? <Scroller { ...props } />
    : <ViewOrTouchable { ...props } />
)


const LayoutItem = props => (
  <View
    { ...props }
    style={[ styles.layoutItem, props.style ]}
  />
)


const BarContainer = props => (
  <ViewOrTouchable
    { ...props }
    style={[ styles.barContainer, props.style ]}
  />
)




const XBar = ({

  layout,
  slots,
  groups,
  style,
  onPress,
  onPressPriorities=[ 'slot', 'slots', 'container' ],
  activeOpacity=1,

  // legacy props:

  left,
  center,
  centerTop,
  centerBottom,
  right,

  containerStyle,
  slotStyle,
  leftSlotStyle,
  centerSlotStyle,
  centerTopStyle,
  centerBottomStyle,
  rightSlotStyle,

  containerOnPress,
  leftSlotOnPress,
  centerSlotOnPress,
  centerTopSlotOnPress,
  centerBottomSlotOnPress,
  rightSlotOnPress

}) => {

  // check criteria and conditionally generate warnings and errors

  runDevMessages([

    ...[

      [ left, 'left' ],
      [ center, 'center' ],
      [ centerTop, 'centerTop' ],
      [ centerBottom, 'centerBottom' ],
      [ right, 'right' ],

      [ containerStyle, 'containerStyle' ],
      [ slotStyle, 'slotStyle' ],
      [ leftSlotStyle, 'leftSlotStyle' ],
      [ centerSlotStyle, 'centerSlotStyle' ],
      [ centerTopStyle, 'centerTopStyle' ],
      [ centerBottomStyle, 'centerBottomStyle' ],
      [ rightSlotStyle, 'rightSlotStyle' ],

      [ containerOnPress, 'containerOnPress' ],
      [ leftSlotOnPress, 'leftSlotOnPress' ],
      [ centerSlotOnPress, 'centerSlotOnPress' ],
      [ centerTopSlotOnPress, 'centerTopSlotOnPress' ],
      [ centerBottomSlotOnPress, 'centerBottomSlotOnPress' ],
      [ rightSlotOnPress, 'rightSlotOnPress' ]

    ].map((prop) => ([
      !!prop[0],
      'warning',
      devMessages.usingLegacyProp(prop[1])
    ]))

  ])

  /* 
   * returns a function, which calls all onPress functons
   * (container onPress, slots onPress, slot onPress),
   * each of which is triggered in the order determined by
   * the onPressPriorities prop, which defaults to
   * [ 'slot', 'slots', 'container' ]
   */

  function mergeOnPresses() {

    return () => {
      onPressPriorities.map((priority, i) => {
        switch(priority) {
          case 'container' : {
            return arguments[0]
            break
          }
          case 'slots' : {
            return arguments[1]
            break
          }
          case 'slot' : {
            return arguments[2]
            break
          }
          default : {
            console.error('error in mergeOnPresses()')
            break
          }
        }
      }).forEach((call) => {
        typeof call === 'function' && call()
      })
    }

  }

  /*
   * Track which slots are going to be overflown so that
   * style { flex : 1 } can be added to the parent LayoutItem.
   * This ensures that the overflown slot will take up available
   * space without pushing adjacent slots out of the container bounds
   */

  let overflownSlotIndices = []
  
  slots = (() => {

    // bring container onPress into scope
    const containerOnPress = onPress

    // if slots prop includes an all slots config
    if(slots.length == 2 && Array.isArray(slots[1]) ) {

      // bring the config's onPress into scope
      const slotsOnPress = slots[0].onPress

      /*
       * map each slot onto itself with its destructured props,
       * along with the merged styles and onPress methods
       */

      return slots[1].map(slot => ({

        activeOpacity,
        ...slot,

        onPress : mergeOnPresses(
          containerOnPress,
          slotsOnPress,
          slot.onPress
        ),

        style : {
          ...StyleSheet.flatten(slots[0].style),
          ...StyleSheet.flatten(slot.style)
        },

      }))

    } else {

      // same mapping as above, but without the all slots config

      return slots.map(slot => ({

        activeOpacity,
        ...slot,

        style : StyleSheet.flatten(slot.style),

        onPress : mergeOnPresses(
          containerOnPress,
          null,
          slot.onPress
        )

      }))

    }

  })().map((slot, i) => {

    /* 
     * if slot contains the overflow prop, push the index to
     * overflownSlotIndices for later use in applying { flex : 1 }
     * to LayoutItems housing overflown slots
     */

    if(slot.overflow) {
      overflownSlotIndices.push(i)
    }

    /* 
     * return array of type Slot,
     * initialized with the slots config that got mapped above
     */

    return (
      <Slot
        { ...slot }
        children={
          Array.isArray(slot.children)
            ? slot.children.map((child, j) => (
              <View
                children={ child }
                key={ j }
              />
            ))
            : slot.children
        }
        key={ i }
      />
    )

  })

  /*
   * initialize mutable array "layoutItems"
   * and add a method to it, "addItem", which takes in children (the slot(s))
   * of the (to-be-created) LayoutItem, groupIndex (will be the same as slotIndex
   * if groups prop is undefined), and slotIndex (the index within slots of the
   * slot passed in as the "children" argument)
   */

  let
    layoutItems = []
    layoutItems.addItem = (children, groupIndex, slotIndex) => {
      layoutItems.push(
        <LayoutItem
          children={ children }
          style={[
            layout
              ? Array.isArray(styles[layout].layoutItem)
                ? styles[layout].layoutItem[groupIndex]
                : styles[layout].layoutItem
              : null,
            overflownSlotIndices.includes(groupIndex)
              ? { flex : 1 } : null
          ]}
          key={ groupIndex }
        />
      )
    }

  if(groups) { // if we need to group slots into a given LayoutItem

    /*
     * if entered only 1 group, no need for the embedded array –
     * can simply reassign self into a new array
     */
    
    let is2D = false
    groups.forEach((group) => {
      if(Array.isArray(group)) {
        is2D = true
      }
    })
    if(!is2D) groups = [groups]

    // track the current slot and group
    let slotIndex = 0, groupIndex = 0

    slots.forEach((slot, i) => {

      // defaults to new array with the slotIndex as the sole element
      let newElement = [slotIndex]

      /*
       * if slotIndex is contained within a group, we want
       * to override newElement with the given group
       */

      for(let j = 0; j < groups.length; j++) {
        if(groups[j].includes(slotIndex)) {
          newElement = groups[j]
          break
        }
      }

      if(slotIndex == i) { // check this to avoid pushing same newElement twice

        // add the new Item
        layoutItems.addItem(
          newElement.map(slotIndex => slots[slotIndex]),
          groupIndex,
          slotIndex
        )

        // increment the counters
        slotIndex += newElement.length
        groupIndex ++

      }

    })

  } else {

    // so much simpler without groups
    slots.forEach(layoutItems.addItem)

  }

  /*
   * return the bar with layoutItems as the children –
   * onPress, doesn't override slot(s) onPress handlers,
   * even when slot is overflown
   */

  return (
    <BarContainer
      children={ layoutItems }
      style={[
        layout
          ? styles[layout].barContainer
          : null,
        style
      ]}
      { ...{ onPress, activeOpacity } }
    />
  )

}




const stylePropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  )
])

XBar.propTypes = {
  layout : PropTypes.oneOf(Object.keys(styles)),
  slots : PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        style : stylePropType,
        onPress : PropTypes.func
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          component : PropTypes.node,
          style : stylePropType,
          onPress : PropTypes.func,
          overflow : PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
              effect : PropTypes.string,
              effectConfig : PropTypes.object
            })
          ])
        })
      )
    ])
  ).isRequired,
  group : PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.number
    ),
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.number
      )
    )
  ]),
  style : PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
      ])
    )
  ]),
  onPress : PropTypes.func,
  onPressPriorities : PropTypes.arrayOf(
    PropTypes.oneOf([ 'slot', 'slots', 'container' ])
  )
}

export default XBar
