import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie } from '@/types/movie';
import { getPopular } from '@/services/movies';
import HeroCard from '../HeroCard';
import MoviesList from '../MoviesList';
import MovieNotFound from '../shared/MovieNotFound';
import MoviesListSkeleton from '../shared/MoviesListSkeleton';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <MoviesListSkeleton />
  )

  if (!popularMovies || popularMovies.length === 0) return (
    <MovieNotFound />
  )
  return (
    <>
      <HeroCard movie={popularMovies[Math.floor(Math.random() * 19)]} />
      <MoviesList movies={popularMovies} title="Les plus populaires" />
    </>
  )
}

export default PopularMovies