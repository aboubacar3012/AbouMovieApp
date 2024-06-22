import { ScrollView, StyleSheet } from 'react-native'

import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import MovieCard from './MovieCard'
import { Movie } from '@/types/movie'

type MoviesListProps = {
  movies?: Movie[],
  title?: string,
  scrollHorizontal?: boolean,
}

const MoviesList = ({ movies, title }: MoviesListProps) => {
  const size = title?.includes('En ce moment') ? 'large' : 'small'
  if (!movies) {
    return null
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          {movies?.map((movie) => (
            <MovieCard size={size} key={movie.id} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default MoviesList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardContainer: {
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  text: {
    color: Colors.light.text,
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 10,
  },
});