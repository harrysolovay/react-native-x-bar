import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet } from 'react-native'
import { Header, Text } from '../components'
import XBar from 'react-native-x-bar'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'

class UseCases extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>

        <Header
          onBackPress={ this.props.navigation.goBack }
          title='SOME USE CASES'
        />
        
        <ScrollView contentContainerStyle={ styles.scrollView }>


          <XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../assets/menu.png') }
                    style={{
                      width : 18
                    }}
                    resizeMode='contain'
                  />
                ),
                style : { marginLeft : 15 }
              },
              {
                children : (
                  <Image
                    source={ require('../assets/logo.png') }
                    style={{
                      width : 18
                    }}
                    resizeMode='contain'
                  />
                ),
                style : { paddingTop : 2, paddingBottom : 4 }
              },
              {
                children : (
                  <Image
                    source={ require('../assets/cart.png') }
                    style={{
                      width : 16
                    }}
                    resizeMode='contain'
                  />
                ),
                style : { marginRight : 15 }
              }
            ]}
            layout='absolute center'
            style={[ styles.bar, { backgroundColor : '#000', borderColor : '#000' } ]}
          />

          <XBar
            slots={[
              {
                children : (
                  <Image
                    source={ require('../assets/avatar.png') }
                    style={{
                      width : 30,
                      height : 30,
                      borderRadius : 15
                    }}
                  />
                ),
                style : { marginLeft : 10 }
              },
              {
                children : [
                  <Text>HARRY SOLOVAY</Text>,
                  <Text sub>@hsolvz</Text>
                ],
                style : { marginLeft : 8 }
              },
              {
                children : (
                  <Ionicons
                    name='ios-more-outline'
                    color='#000'
                    size={ 30 }
                    style={{ paddingTop : 3 }}
                  />
                ),
                style : { marginRight : 20 }
              }
            ]}
            layout='space between'
            groups={[ 0, 1 ]}
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                children : (
                  <Ionicons
                    name='ios-arrow-round-back'
                    color='#000'
                    size={ 34 }
                    style={{ paddingTop : 3 }}
                  />
                ),
                style : { marginLeft : 15 }
              },
              {
                children : <Text>HEADER TITLE GOES HERE</Text>,
                style : { marginTop : 2.5 }
              },
              {
                children : (
                  <Ionicons
                    name='ios-arrow-down'
                    color='#000'
                    size={ 15 }
                    style={{ paddingTop : 3 }}
                  />
                ),
                style : { marginTop : 1, marginRight : 15 }
              }
            ]}
            layout='absolute center'
            style={ styles.bar }
          />
          
          <XBar
            slots={[
              {
                children : [
                  <Text style={{ color : '#4a90e2' }}>JONY IVE</Text>,
                  <Text sub>followed you</Text>
                ],
                style : { marginLeft : 10 }
              },
              {
                children : <Text style={{ color : '#4a90e2' }}>follow back</Text>,
                style : { marginTop : 2, marginRight : 15 }
              }
            ]}
            layout='space between'
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                children : (
                  <Ionicons
                    name='ios-disc-outline'
                    color='#000'
                    size={ 25 }
                    style={{ paddingTop : 3 }}
                  />
                )
              },
              {
                children : (
                  <Ionicons
                    name='ios-aperture-outline'
                    color='#4a90e2'
                    size={ 25 }
                    style={{ paddingTop : 3 }}
                  />
                )
              },
              {
                children : (
                  <Ionicons
                    name='ios-contact-outline'
                    size={ 25 }
                    style={{ paddingTop : 3 }}
                  />
                )
              }
            ]}
            layout='space equal'
            style={ styles.bar }
          />

          <XBar
            slots={[
              {
                style : { paddingTop : 4 }
              }, [
                {
                  children : (
                    <Ionicons
                      name='ios-skip-backward-outline'
                      size={ 26 }
                      color='#fff'
                    />
                  )
                },
                {
                  children : (
                    <Ionicons
                      name='ios-play-outline'
                      size={ 30 }
                      color='#fff'
                    />
                  )
                },
                {
                  children : (
                    <Ionicons
                      name='ios-skip-forward-outline'
                      size={ 26 }
                      color='#fff'
                    />
                  )
                }
              ]
            ]}
            layout='space evenly'
            style={[ styles.bar, { backgroundColor : '#da0f47', borderColor : '#da0f47' } ]}
          />

          <XBar
            slots={[
              {
                children : [
                  <Text>BRO CHAT</Text>,
                  <Text sub>the bros</Text>
                ],
                style : {
                  paddingHorizontal : 10
                }
              },
              {
                children : (
                  <View style={{ flexDirection : 'row' }}>
                    <View style={{ marginLeft : 5 }}>
                      <Text>Darren</Text>,
                      <Text sub>@dairbair</Text>
                    </View>
                    <View style={{ marginLeft : 10 }}>
                      <Text>MICKY</Text>,
                      <Text sub>@mousintheclub</Text>
                    </View>
                    <View style={{ marginLeft : 10 }}>
                      <Text>Hunter</Text>,
                      <Text sub>@pourdemshots</Text>
                    </View>
                    <View style={{ marginLeft : 10 }}>
                      <Text>Jake</Text>,
                      <Text sub>@thesnake</Text>
                    </View>
                    <View style={{ marginLeft : 10 }}>
                      <Text>Robbie</Text>,
                      <Text sub>@thesensitivebro</Text>
                    </View>
                  </View>
                ),
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient,
                    color : '#fcfcfc'
                  }
                }
              }
            ]}
            style={ styles.bar }
          />

          <View
            style={{
              borderColor : '#ddd',
              borderWidth : 1,
              backgroundColor : '#fcfcfc',
              marginTop : 15,
              marginHorizontal : 15
            }}
          >
            <XBar
              slots={[
                {
                  children : <Text>Stories</Text>
                },
                {
                  children : (
                    <Ionicons
                      name='ios-play-outline'
                      size={ 30 }
                      color='#fff'
                    />
                  )
                },
                {
                  children : <Text>Play All</Text>
                }
              ]}
              layout='space between'
              groups={[ 1, 2 ]}
              style={{ paddingHorizontal : 15 }}
            />
            <XBar
              slots={[
                {
                  children : (
                    <View style={{ flexDirection : 'row' }}>
                      {
                        [
                          { name : 'Daniel', avatar : require('../assets/daniel.jpg') },
                          { name : 'Graham', avatar : require('../assets/graham.jpg') },
                          { name : 'Sam', avatar : require('../assets/sam.jpg') },
                          { name : 'Leonard', avatar : require('../assets/leonard.jpg') },
                          { name : 'Sarah', avatar : require('../assets/sarah.jpg') },
                          { name : 'Robert', avatar : require('../assets/robert.jpg') },
                          { name : 'Jack', avatar : require('../assets/jack.jpg') }
                        ].map(({ name, avatar }, i) => (
                          <View style={{ flexDirection : 'column', paddingRight : 10, alignItems : 'center' }} key={ i }>
                            <Image
                              source={ avatar }
                              style={{ width : 60, height : 60, borderRadius : 30 }}
                            />
                            <Text sub style={{ paddingVertical : 10 }}>{ name }</Text>
                          </View>
                        ))
                      }
                    </View>
                  ),
                  style : { paddingHorizontal : 15 },
                  overflow : {
                    effect : 'clip'
                  }
                }
              ]}
            />
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView : {
    paddingTop : 15,
    paddingBottom : 30
  },
  bar : {
    height : 57,
    borderColor : '#ddd',
    borderWidth : 1,
    marginTop : 15,
    marginRight : 15,
    marginLeft : 15,
    backgroundColor : '#fcfcfc'
  }
})

export default UseCases