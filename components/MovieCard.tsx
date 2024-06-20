import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Link } from 'expo-router';
import { Movie } from '@/types/movie';

type MovieCardProps = {
  movie: Movie
}
const MovieCard = ({ movie }: MovieCardProps) => {

  if (!movie) {
    return null;
  }
  return (
    <Link href={`/${movie.id}`}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        }}
      />
    </Link>

  )
}

export default MovieCard;


const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 100,
    borderRadius: 5,
  },
});