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
  renderChord (chord) {
    return chord ? <Text style={[s.song.chord]}>{chord}</Text> : null
  },
  renderCharacter (character, j) {
    var chord = this.state.chords[j]
    return <View style={[s.song.character.container]} key={j}>
      {this.renderChord(chord)}
      <Text style={[s.song.character.text]}>{character}</Text>
    </View>
  },
  render () {
    var stanzas = this.props.song.lyrics.split("\n")
    var counter = -2

    return <ScrollView>
      <View style={[]}>
        <Text style={[s.song.title]}>{this.props.song.title}</Text>
        <Text style={[s.song.author]}>{global.t.by} {this.props.song.author}</Text>

        {stanzas.map((stanza, i) => {
          counter += 1
          return <View key={i} style={[s.song.stanza]}>
            {stanza.split('').map((character, j) => {
              counter += 1
              return this.renderCharacter(character, counter)
            })}
          </View>
        })}
      </View>
    </ScrollView>
  },
})
