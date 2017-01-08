'use strict'

import React, {Component} from 'react'
import {AppRegistry} from 'react-native'

var Root = require('./root')

var BahaiSongBook = React.createClass({
  render () {
    return <Root/>
  },
})

AppRegistry.registerComponent('BahaiSongBook', () => BahaiSongBook)
