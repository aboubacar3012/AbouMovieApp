import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { getMovieDetails } from '@/services/movies';
import { useLocalSearchParams } from 'expo-router';
import { Genre, Movie } from '@/types/movie';
import MovieNotFound from '@/components/shared/MovieNotFound';

export default function SingleMovie() {
  const [movie, setMovie] = useState<Partial<Movie>>();
  const [loading, setLoading] = useState(true)

  const { movieId } = useLocalSearchParams()

  // Movie details
  useEffect(() => {
    getMovieDetails(Number(movieId)).then((res) => {
      setMovie(res);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);

  const convertTime = (time: number) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}min`;
  }


  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  if (!movie) {
    return (
      <SafeAreaView style={styles.container}>
       <MovieNotFound />
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.heroContent}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            }}
          />
        </View>

        <View style={styles.infos}>
          <View style={styles.title}>
            <Text style={styles.text}>{movie.title}</Text>
            <Text style={{ color: Colors.light.text }}>{movie?.release_date?.split('-')[0] ?? "2023"} - {convertTime(movie?.runtime ?? 120)}</Text>
          </View>

          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.buttons}>
              {
                movie.genres && movie.genres.map((genre: Genre) => (
                  <View key={genre.id} style={styles.buttonView}>
                    <Text style={{ color: 'white' }} >{genre.name}</Text>
                  </View>
                ))
              }

            </View>
          </ScrollView>

          <Text style={styles.synospisTitle}>Synopsis</Text>
          <ScrollView horizontal={false}>
            <Text style={styles.synopsisContent}>
              {movie.overview}
            </Text>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.backgroundPrimary,
    height: '100%',
    flex: 1,
    overflow: 'scroll'
  },
  heroContent: {
    margin: "auto",
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    height: 400,
    width: '100%',
    borderRadius: 30,
    // cover
    resizeMode: 'stretch',
  },
  text: {
    width: '100%',
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 5,
  },
  infos: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 5
  },
  buttonView: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundSecondary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {
  },
  synospisTitle: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  synopsisContent: {
    color: Colors.light.text,
    fontSize: 15,
    marginVertical: 5,
  }

});