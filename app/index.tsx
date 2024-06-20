import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import HeroCard from '@/components/HeroCard';
import MovieCard from '@/components/MovieCard';
import MoviesList from '@/components/MoviesList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getNowPlaying, getPopular, getTopRated, getUpComing } from '@/services/movies';


export default function HomeScreen() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Now Playing movies
  useEffect(() => {
    getNowPlaying().then((res) => {
      setNowPlayingMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);

  // Populars movies
  useEffect(() => {
    getPopular().then((res) => {
      setPopularMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);

  // Upcoming movies
  useEffect(() => {
    getUpComing().then((res) => {
      setUpComingMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);

  // TopRated movies
  useEffect(() => {
    getTopRated().then((res) => {
      setTopRatedMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeroCard movie={popularMovies[Math.floor(Math.random() * 19)]} />
        <MoviesList movies={popularMovies} title="Les plus populaires" />
        <MoviesList movies={topRatedMovies} title="Les mieux notés" />
        <MoviesList movies={nowPlayingMovies} title="En ce moment" />
        <MoviesList movies={upComingMovies} title="Prochainement" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.backgroundPrimary,
    height: '100%',
    flex: 1,
    overflow: 'scroll'
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.light.text,
  },

});