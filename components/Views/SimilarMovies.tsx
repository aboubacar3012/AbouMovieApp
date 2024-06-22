import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSimilarMovies, getUpComing } from '@/services/movies';
import { Movie } from '@/types/movie';
import MoviesList from '../MoviesList';
import MovieNotFound from '../shared/MovieNotFound';
import MoviesListSkeleton from '../shared/MoviesListSkeleton';

type SimilarMoviesProps = {
  movieId: number;
}
const SimilarMovies = ({movieId}: SimilarMoviesProps) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);


  // Upcoming movies
  useEffect(() => {
    getSimilarMovies(movieId).then((res) => {
      setSimilarMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, []);

  if (loading) return (
    <MoviesListSkeleton />
  )

  if (!similarMovies || similarMovies.length === 0) return (
    <MovieNotFound />
  )
  return (
    <MoviesList movies={similarMovies} title="Titres similaires" />
  )
}

export default SimilarMovies