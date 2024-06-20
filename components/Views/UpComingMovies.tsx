import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUpComing } from '@/services/movies';
import { Movie } from '@/types/movie';
import MoviesList from '../MoviesList';
import MovieNotFound from '../shared/MovieNotFound';
import MoviesListSkeleton from '../shared/MoviesListSkeleton';

const UpComingMovies = () => {
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);


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

  if (loading) return (
    <MoviesListSkeleton />
  )

  if (!upComingMovies || upComingMovies.length === 0) return (
    <MovieNotFound />
  )
  return (
    <MoviesList movies={upComingMovies} title="Prochainement" />
  )
}

export default UpComingMovies