import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getNowPlaying } from '@/services/movies';
import { Movie } from '@/types/movie';
import MoviesList from '../MoviesList';
import MoviesListSkeleton from '../shared/MoviesListSkeleton';
import MovieNotFound from '../shared/MovieNotFound';

const NowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
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

  if (loading) return (
    <MoviesListSkeleton />
  )

  if(!nowPlayingMovies || nowPlayingMovies.length === 0) return (
    <MovieNotFound />
  )

  if(nowPlayingMovies)
  return (
    <MoviesList movies={nowPlayingMovies} title="En ce moment" />
  )
}

export default NowPlayingMovies