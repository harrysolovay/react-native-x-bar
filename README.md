<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/60rNlHZhaeSqzRj8Jt/giphy.gif" width="260" height="510" />

</p>

<h2 align="center">
  🙅 X Bar
</h2>
<p align="center">
  An easy-to-use component for reducing UI/styling complexity<br/>
  <small>clean, elegant, extensible bars for almost all use cases</small>
</p>

<p align="center">
  <br>
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=exp://expo.io/@hsolvz/react-native-x-bar-example">
  <br>
  <a href="https://expo.io/@hsolvz/react-native-x-bar-example" target="_blank"><i>demo</i></a>
</p>

## Features

* Allows you to use your own "slot" styles and components
* Support for horizontally overflown "center"
* 8 layouts X 3 slots X 4 centers
* onPress handling for individual slots
* onPress handling for container (can coexist overflown center panning)

## Installation

* Using [npm](https://www.npmjs.com/#getting-started): `npm i react-native-x-bar -S`
* Using [Yarn](https://yarnpkg.com/): `yarn add react-native-x-bar`

## Example

renders:

<Img src='https://image.ibb.co/bG2N0S/Screen_Shot_2018_03_30_at_3_30_17_PM.png' />

```jsx
import react, { Component } from 'react'
import { StyleSheet } from 'react-native'
import XBar from 'react-native-x-bar'

class Example extends { Component } {
  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({
  container : {
    borderWidth : 1,
    borderColor : '#ddd',
    backgroundColor : '#fcfcfc',
    margin : 15
  },
  slot : {
    paddingTop : 15,
    paddingBottom : 15
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
  }
})

export default Example
```

## More examples

See [`example`](example) for the source of the demo app's implementation.

## Props

### Components –each default to `undefined`

* **`left`** _(Component Instance)_ - the component to be placed in the left slot
* **`center`** _(Component Instance)_ - the component to be placed in the center slot
* **`centerTop`** _(Component Instance)_ - the component to be placed in the center's top slot–cannot be used in conjunction with `center`
* **`centerBottom`** _(Component Instance)_ - the component to be placed in the center's bottom slot–cannot be used in conjunction with `center`
* **`right`** _(Component Instance)_ - the component to be placed in the right slot

### "layout" prop options:

* "lean left" - center and left slots gravitate left (kind of like "float : left" in CSS)
* "lean right" - center and right slots gravitate right (kind of like "float : right" in CSS)
* "space between" - left and right slots stick to their respective sides, while the center slot is positioned between the two
* "absolute center" - "right" and "left" components stick to their respective sides, while the center component is absolutely positioned at the center of the container (container will still resize to the tallest slot/component)
* "space around" - similar to "space equal", but styled to accomodate differences in slot/component width
* "space equal" - each component's slot takes up a third of the container width, and is centered within its third
* "space evenly" - the space inbetween components and the first and last components with the right and left edges (respectively) of the container are equal

### "overflow" prop options:
* LinearGradient _(Function or Class)_; can come from either [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient) or, without linking, use [expo's Linear Gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient.html)––will use the linear gradient component to construct a "fade" effect on either side of the overflown container (I think you'll like the asethetic)
* "Clip"_(String)_; no fade effect gets applied to the right and left sides of the overflown center

### Styling

* **`containerStyle`** _(Style Object)_
* **`slotStyle`** _(Style Object)_
* **`leftSlotStyle`** _(Style Object)_
* **`rightSlotStyle`** _(Style Object)_
* **`centerSlotStyle`** _(Style Object)_
* **`centerTopSlotStyle`** _(Style Object)_
* **`centerBottomSlotStyle`** _(Style Object)_

### onPress callbacks

* **`containerOnPress`** _(Function)_
* **`slotOnPress`** _(Function)_
* **`leftSlotOnPress`** _(Function)_
* **`rightSlotOnPress`** _(Function)_
* **`centerSlotOnPress`** _(Function)_
* **`centerTopSlotOnPress`** _(Function)_
* **`centerBottomSlotOnPress`** _(Function)_

## License

* [MIT](LICENSE)

## Author

Feel free to ask me questions on Twitter [@hsolvz](https://twitter.com/hsolvz)

