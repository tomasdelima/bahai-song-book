'use strict'

import React, {Component} from 'react'
import {
  View,
  TouchableHighlight,
  AsyncStorage,
  ScrollView,
  Text,
} from 'react-native'

const s = require('./styles')

module.exports = React.createClass({
  goToSong (song) {
    global.navigator.push({id: 'song', tabId: 'all-songs', song: song})
  },
  renderInlineSong (song, i) {
    return <TouchableHighlight key={i} underlayColor='rgba(0,0,0,0.2)' onPress={() => this.goToSong(song)} >
      <View style={[s.song.inline.container]}>
        <Text style={[s.song.inline.title]}>{song.title}</Text>
        <Text style={[s.song.inline.author]}>{song.author}</Text>
      </View>
    </TouchableHighlight>
  },
  render () {
    return <ScrollView>
      <View style={[]}>
        {this.props.songs.map((song, i) => this.renderInlineSong(song, i))}
      </View>
    </ScrollView>
  },
})
