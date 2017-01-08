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
  renderChord (chord) {
    return chord ? <Text style={[s.song.chord]}>{chord}</Text> : null
  },
  renderCharacter (character, i) {
    var chord = this.props.song.tabs[i]
    return <View style={[s.song.character.container]} key={i}>
      {this.renderChord(chord)}
      <Text style={[s.song.character.text]}>{character}</Text>
    </View>
  },
  render () {
    return <ScrollView>
      <View style={[]}>
        <Text style={[s.song.title]}>{this.props.song.title}</Text>
        <View style={[s.song.body]}>{this.props.song.body.split('').map((character, i) => this.renderCharacter(character, i))}</View>
      </View>
    </ScrollView>
  },
})
