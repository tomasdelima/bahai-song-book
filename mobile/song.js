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
  getInitialState() {
    return {chords: (typeof this.props.song.chords) == 'string' ? JSON.parse(this.props.song.chords) : this.props.song.chords}
  },
  renderStanza (stanza, i, begining) {
    var chords = ''
    var k = 0
    for (var j=0; j<stanza.length-0; j++) {
      if (k < stanza.length) chords += this.state.chords[begining + k] || ' '
      k += (this.state.chords[begining + k] || ' ').length
    }

    return <View key={i} style={[s.song.stanza]}>
      <Text style={[s.song.character.text]}>{stanza}</Text>
      <Text style={[s.song.character.text, s.song.chord]}>{chords}</Text>
    </View>
  },
  render () {
    var stanzas = this.props.song.lyrics.split("\n")
    var begining = 0
    var ending = 0

    return <ScrollView>
      <View style={[]}>
        <Text style={[s.song.title]}>{this.props.song.title}</Text>
        <Text style={[s.song.author]}>{global.t.by} {this.props.song.author}</Text>

        {stanzas.map((stanza, i) => {
          begining = ending
          ending = begining + stanza.length + 1
          return this.renderStanza(stanza, i, begining)
        })}
      </View>
    </ScrollView>
  },
})
