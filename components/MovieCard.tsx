import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Link } from 'expo-router';
import { Movie } from '@/types/movie';
import { useEffect, useState } from 'react';

type MovieCardProps = {
  movie: Movie,
  size: 'small' | 'large'
}
const MovieCard = ({ movie, size }: MovieCardProps) => {

  if (!movie || !movie.poster_path) {
    return null;
  }
  return (
    <Link href={`/${movie.id}`} style={styles.container}>
      
      <ImageBackground
        style={size === 'small' ? styles.imageSmall : styles.imageLarge}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        }}
      >
      {
        movie.vote_average >= 8 && (
          <View style={styles.top10}>
          <Text style={styles.top10Text}>TOP</Text>
          <Text style={styles.top10Text}>10</Text>
        </View>
        )
      }
      {/* Ajout recent */}
      </ImageBackground>
    </Link>

  )
}

export default MovieCard;


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 50,
    // flex: 1,
  },
  imageSmall: {
    height: 180,
    width: 140,
    
    resizeMode: 'contain',
  },
  imageLarge: {
    height: 250,
    width: 150,
    borderRadius: 10,
    resizeMode: 'stretch',

  },
  top10: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#E10B17',
    color: 'white',
    padding: 2,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top10Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  }
});