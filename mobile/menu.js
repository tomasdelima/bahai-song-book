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
  goTo (tabId) {
    global.navigator.push({id: tabId, tabId: tabId})
  },
  renderMiddleButtons (iconSize, iconColor) {
    return <View style={[s.topBar.middleButtons(iconSize)]}>
      {this.renderMiddleButton('all-songs', 'music', iconSize, iconColor)}
      {this.renderMiddleButton('favorites', 'star',  iconSize, iconColor)}
      {this.renderMiddleButton('new-song',  'plus',  iconSize, iconColor)}
    </View>
  },
  renderMiddleButton (tabId, iconName, iconSize, iconColor) {
    return <TouchableHighlight underlayColor='#999' style={[s.topBar.middleButton, s.topBar[this.props.activeTab == tabId ? 'selected' : '']]} onPress={() => this.goTo(tabId)}><FontAwesome name={iconName} size={iconSize} color={iconColor} /></TouchableHighlight>
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

