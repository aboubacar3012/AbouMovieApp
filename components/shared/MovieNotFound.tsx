import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MovieNotFound = () => {
  return (
    <View style={styles.notFound}>
      <Text style={styles.text}>
        Aucun film trouvé
      </Text>
    </View>
  )
}

export default MovieNotFound


const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
})
