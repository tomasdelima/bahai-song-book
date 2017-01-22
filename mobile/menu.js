'use strict'

import React, {Component} from 'react'
import {
  View,
  Navigator,
  ListView,
  AsyncStorage,
  Text,
  TouchableHighlight,
  AppRegistry,
  BackAndroid,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const s = require('./styles')
const t = require('./translations')


module.exports = React.createClass({
  renderBackButton (iconSize, iconColor) {
    return <TouchableHighlight underlayColor='#999' style={[s.square(iconSize), {marginTop: 10}]}>
      <View>
        {this.props.onBackButtonPress ? <FontAwesome name="chevron-left" size={iconSize} color={iconColor} onPress={this.props.onBackButtonPress} /> : null}
      </View>
    </TouchableHighlight>
  },
  renderMiddleButtons (iconSize, iconColor) {
    return <View style={[s.topBar.middleButtons(iconSize)]}>
      <TouchableHighlight underlayColor='#999' style={[s.topBar.middleButton, s.topBar[this.props.activeTab == 'all-songs' ? 'selected' : '']]}><FontAwesome name="music" size={iconSize} color={iconColor} onPress={this.props.onBackButtonPress} /></TouchableHighlight>
      <TouchableHighlight underlayColor='#999' style={[s.topBar.middleButton, s.topBar[this.props.activeTab == 'favorites' ? 'selected' : '']]}><FontAwesome name="star"  size={iconSize} color={iconColor} onPress={this.props.onBackButtonPress} /></TouchableHighlight>
      <TouchableHighlight underlayColor='#999' style={[s.topBar.middleButton, s.topBar[this.props.activeTab == 'new-song' ? 'selected' : '']]}><FontAwesome name="plus"  size={iconSize} color={iconColor} onPress={this.props.onBackButtonPress} /></TouchableHighlight>
    </View>
  },
  render () {
    var iconSize = 30
    var iconColor = '#DAA520'

    return <View style={[s.fullScreen]}>
      <View style={[s.topBar.container]}>
        {this.renderBackButton(iconSize, iconColor)}
        {this.renderMiddleButtons(iconSize, iconColor)}
      </View>

      {this.props.children}
    </View>
  },
})

