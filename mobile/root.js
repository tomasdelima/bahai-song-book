'use strict'

import React, {Component} from 'react'
import {
  View,
  Navigator,
  ListView,
  AsyncStorage,
  Text,
  AppRegistry,
  BackAndroid,
} from 'react-native'

const s = require('./styles')
const Songs = require('./songs')
const Song = require('./song')

module.exports = React.createClass({
  getInitialState() {
    return {
      initialRoute: {id: 'all-songs'},
      // initialRoute: {id: 'song', song: this.testSongs()[0]},
      allSongs: this.testSongs(),
    }
  },
  componentDidMount() {
    this.listenToBackButtonPress()
    this.loadSongs()
  },
  listenToBackButtonPress () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        var lastRoute = global.navigator.getCurrentRoutes().pop().id

        if (lastRoute == 'all-songs') {
          return false
        } else {
          global.navigator.pop()
          return true
        }
      })
  },
  loadSongs () {
    AsyncStorage.getItem('songs').then((songs) => {
      if (songs) this.setState({allSongs: songs})
    })
  },
  testSongs () {
    return [
      {title: 'Song 1', body: 'Song 1 song 1 .\n.song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1 song 1', tabs: {0: 'C', 5: 'D', 7: 'F#', 11: 'Am', 30: 'G#', 135: 'C#'}, author: 'Author 1'},
      {title: 'Song 2', body: 'Song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2 song 2', tabs: {0: 'C', 5: 'D', 7: 'F#', 11: 'Am', 30: 'G#', 135: 'C#'}, author: 'Author 2'},
      {title: 'Song 3', body: 'Song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3 song 3', tabs: {0: 'C', 5: 'D', 7: 'F#', 11: 'Am', 30: 'G#', 135: 'C#'}, author: 'Author 3'},
    ]
  },
  render () {
    return <Navigator style={[]}
      initialRoute={this.state.initialRoute}
      renderScene={this.renderScene}
      configureScene={(route) => { return Navigator.SceneConfigs.FadeAndroid }}
    />
  },
  renderScene (route, navigator) {
    global.navigator = navigator

    if (route.id == 'all-songs') { return <Songs songs={this.state.allSongs} /> }
    if (route.id == 'song') { return <Song song={route.song} /> }
    else { return <Text>NO ROUTE FOUND!</Text>}
  }
})

