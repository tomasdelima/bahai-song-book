const gold = '#DAA520'

const topBar = {
  container: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#333',//'#FAFAD2',
    borderBottomWidth: 2,
    borderColor: gold,
  },
  middleButtons: (iconSize) => { return {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginRight: iconSize,
  }},
  middleButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selected: {backgroundColor: '#555'},
}

const song = {
  inline: {
    container: {padding: 40},
    title: {fontSize: 30},
    author: {fontSize: 17},
  },
  title: {
    fontSize: 30,
    padding: 40,
    paddingBottom: 10,
  },
  author: {
    fontSize: 20,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  stanza: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  character: {
    container: {
      flex: 0,
    },
    text: {
      fontSize: 18,
      lineHeight: 50,
      fontFamily: 'monospace',
    }
  },
  chord: {
    position: 'absolute',
    left: 40,
    marginHorizontal: 0,
    top: -2,
    color: gold,
  },
}

module.exports = {
  topBar: topBar,
  song: song,
  square: (size) => {return {width: size, height: size}},
  squareWithPadding: (size, padding) => {var p = padding || 0; return {width: size + 2*p, height: size + 2*p, padding: p}},
  fullScreen: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  alignCenter: {alignItems: 'center'},
  flex:  {flex: 1},
  red:   { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
  green: { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
  blue:  { backgroundColor: 'rgba(0, 0, 255, 0.2)' },
}

// flexDirection:  ['row', 'row-reverse', 'column', 'column-reverse']
// flexWrap:       ['wrap', 'nowrap']
// justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
// alignItems:     ['flex-start', 'flex-end', 'center', 'stretch']
// alignSelf:      ['flex-start', 'flex-end', 'center', 'stretch', 'auto']
// flexGrow, flexShrink, flexBasis, flex: number
