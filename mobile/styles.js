module.exports = {
  song: {
    inline: {
      container: {padding: 40},
      title: {fontSize: 30},
      author: {fontSize: 17},
    },
    title: {
      fontSize: 30,
      padding: 40
    },
    stanza: {
      paddingHorizontal: 40,
      paddingVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    character: {
      container: {
        flex: 0,
      },
      text: {
        fontSize: 20,
        lineHeight: 60,
      }
    },
    chord: {
      position: 'absolute',
      top: 10,
      width: 50,
    },
  },
  red:   { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
  green: { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
  blue:  { backgroundColor: 'rgba(0, 0, 255, 0.2)' },
}