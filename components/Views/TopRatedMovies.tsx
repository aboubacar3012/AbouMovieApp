import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTopRated } from '@/services/movies';
import { Movie } from '@/types/movie';
import MoviesList from '../MoviesList';
import MovieNotFound from '../shared/MovieNotFound';
import MoviesListSkeleton from '../shared/MoviesListSkeleton';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <MoviesListSkeleton />
  )

  if(!topRatedMovies || topRatedMovies.length === 0) return (
    <MovieNotFound />
  )
  
  return (
    <MoviesList movies={topRatedMovies} title="Les mieux notés" />
  )
}

export default TopRatedMovies