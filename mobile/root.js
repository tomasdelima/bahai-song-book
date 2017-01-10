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

const s     = require('./styles')
const Songs = require('./songs')
const Song  = require('./song')
const t = require('./translations')

module.exports = React.createClass({
  getInitialState () {
    return {
      initialRoute: {id: 'all-songs'},
      allSongs: [],
    }
  },
  componentDidMount () {
    this.loadTranslation('pt')
    this.listenToBackButtonPress()
    this.loadSongs().then(() => {
      this.loadSongsFromRemoteServer()
    })
  },
  loadTranslation (language) {
    global.t = t[language]
  },
  loadSongsFromRemoteServer () {
    fetch('https://bahai-song-book.herokuapp.com/songs').then((response) => {
      var parsedResponse = JSON.parse(response._bodyInit)
      this.saveNewSongs(JSON.parse(parsedResponse.data))
    })
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
    return AsyncStorage.getItem('songs').then((songs) => {
      if (songs) {
        var parsedSongs = JSON.parse(songs)
        this.setState({allSongs: parsedSongs})
        console.log('Loaded songs: ' + parsedSongs.length)
      }
    })
  },
  saveNewSongs (newSongs) {
    var allSongsMapping = {}
    this.state.allSongs.map((song) => allSongsMapping[song.id] = song)
    console.log(typeof newSongs)
    newSongs.map((song) => allSongsMapping[song.id] = song)

    var allSongs = []
    Object.keys(allSongsMapping).map((id) => allSongs.push(allSongsMapping[id]))

    console.log('Saving songs: ' + allSongs.length)
    this.setState({allSongs: allSongs})
    return AsyncStorage.setItem('songs', JSON.stringify(allSongs))
  },
  testSongs () {
    return [
      {id: 0, title: 'Song 0', lyrics: 'A B C D E\nF G H\nI J K\nL M N\nO P Q\nR S T\nU V W\nX Y Z ', chords: {0: 'A', 2: 'B', 4: 'C', 6: 'D', 8: 'E', 10: 'F', 12: 'G', 14: 'H', 16: 'I', 18: 'J', 20: 'K', 22: 'L', 24: 'M', 26: 'N', 28: 'O', 30: 'P', 32: 'Q', 34: 'R', 36: 'S', 38: 'T', 40: 'U', 42: 'V', 44: 'W', 46: 'X', 48: 'Y', 50: 'Z'}, author: 'Author 0'},
      {id: 1, title: 'Navegantes da Vida', lyrics: "Caminhar passo a passo a te encontrar, solto ao vento eu cruzo o mar\nNavegante da vida, e é tão bom\nConhecer nos Teus olhos o meu irmão, dar-te a força das minhas mãos\nDar-te o riso que vibra dentro em mim\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornamos só um\nTe abraçar, com a força do meu amor, ser alívio pra tua dor\nTe curar as feridas e é tão bom\nTe levar e ir também ao mesmo lugar, onde todos vão encontrar\nDa semente o fruto em cada um\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornarmos só um", chords: {"0":"Am","9":"Fo","28":"Am","37":"Fo","59":"C","69":"Bo","82":"Am","96":"FM7","100":"Am","107":"Fo","126":"Am","135":"Fo","156":"C","168":"Bo","186":"Am","202":"FM7","206":"C","214":"Bo","232":"AM","241":"G","260":"F","269":"G7","287":"C","291":"E7","293":"C","301":"Bo","319":"Am","330":"G","344":"F","356":"G7","374":"Am","377":"Am","387":"Fo","404":"Am","412":"Fo","429":"C","437":"Bo","451":"Am","466":"FM7","469":"Am","476":"Fo","496":"Am","504":"Fo","521":"C","531":"Bo","548":"Am","558":"FM7","561":"C","570":"Bo","587":"Am","596":"G","614":"F","624":"G7","642":"C","646":"E7","648":"C","656":"Bo","647":"Am","685":"G","699":"F","712":"G7","729":"Am"}, author: 'Max Willecke'},
      {id: 2, title: 'Navegantes da Vida', lyrics: "Caminhar passo a passo a te encontrar, solto ao vento eu cruzo o mar\nNavegante da vida, e é tão bom\nConhecer nos Teus olhos o meu irmão, dar-te a força das minhas mãos\nDar-te o riso que vibra dentro em mim\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornamos só um\nTe abraçar, com a força do meu amor, ser alívio pra tua dor\nTe curar as feridas e é tão bom\nTe levar e ir também ao mesmo lugar, onde todos vão encontrar\nDa semente o fruto em cada um\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornarmos só um", chords: {"0":"Am","9":"Fo","28":"Am","37":"Fo","59":"C","69":"Bo","82":"Am","96":"FM7","100":"Am","107":"Fo","126":"Am","135":"Fo","156":"C","168":"Bo","186":"Am","202":"FM7","206":"C","214":"Bo","232":"AM","241":"G","260":"F","269":"G7","287":"C","291":"E7","293":"C","301":"Bo","319":"Am","330":"G","344":"F","356":"G7","374":"Am","377":"Am","387":"Fo","404":"Am","412":"Fo","429":"C","437":"Bo","451":"Am","466":"FM7","469":"Am","476":"Fo","496":"Am","504":"Fo","521":"C","531":"Bo","548":"Am","558":"FM7","561":"C","570":"Bo","587":"Am","596":"G","614":"F","624":"G7","642":"C","646":"E7","648":"C","656":"Bo","647":"Am","685":"G","699":"F","712":"G7","729":"Am"}, author: 'Max Willecke'},
      {id: 3, title: 'Navegantes da Vida', lyrics: "Caminhar passo a passo a te encontrar, solto ao vento eu cruzo o mar\nNavegante da vida, e é tão bom\nConhecer nos Teus olhos o meu irmão, dar-te a força das minhas mãos\nDar-te o riso que vibra dentro em mim\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornamos só um\nTe abraçar, com a força do meu amor, ser alívio pra tua dor\nTe curar as feridas e é tão bom\nTe levar e ir também ao mesmo lugar, onde todos vão encontrar\nDa semente o fruto em cada um\nÉ tão bom, sermos ecos da mesma voz, sermos raios da mesma luz\nSermos filhos do amor  \nÉ tão bom, tu e eu nos tornando nós, pela força que vem de Deus, nos tornarmos só um", chords: {"0":"Am","9":"Fo","28":"Am","37":"Fo","59":"C","69":"Bo","82":"Am","96":"FM7","100":"Am","107":"Fo","126":"Am","135":"Fo","156":"C","168":"Bo","186":"Am","202":"FM7","206":"C","214":"Bo","232":"AM","241":"G","260":"F","269":"G7","287":"C","291":"E7","293":"C","301":"Bo","319":"Am","330":"G","344":"F","356":"G7","374":"Am","377":"Am","387":"Fo","404":"Am","412":"Fo","429":"C","437":"Bo","451":"Am","466":"FM7","469":"Am","476":"Fo","496":"Am","504":"Fo","521":"C","531":"Bo","548":"Am","558":"FM7","561":"C","570":"Bo","587":"Am","596":"G","614":"F","624":"G7","642":"C","646":"E7","648":"C","656":"Bo","647":"Am","685":"G","699":"F","712":"G7","729":"Am"}, author: 'Max Willecke'},
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

