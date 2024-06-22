import { StyleSheet, Text, SafeAreaView, View, TextInput, ScrollView, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import PopularMovies from '@/components/Views/PopularMovies';
import UpComingMovies from '@/components/Views/UpComingMovies';
import NowPlayingMovies from '@/components/Views/NowPlayingMovies';
import TopRatedMovies from '@/components/Views/TopRatedMovies';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useEffect, useState } from 'react';
import { searchMovies } from '@/services/movies';
import { Movie } from '@/types/movie';
import MovieCard from '@/components/MovieCard';


export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSearch = (text: string) => {
    setSearch(text);
  }

  useEffect(() => {
    searchMovies(search).then((res) => {
      setMovies(res.results);
      setLoading(false);
    }, (err) => {
      Alert.alert(err);
    }
    );
  }, [search]);

  const onClear = () => {
    setSearch('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Rechercher input */}
        <View style={{ padding: 10, position: 'relative' }}>
          <TabBarIcon name="search1" color="gray" style={{ position: 'absolute', top: 15, left: 16 }} />
          <TextInput
            onChangeText={onSearch}
            value={search}
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              paddingLeft: 40,
              color: Colors.light.text,

            }}
            placeholder="Rechercher un film"
            placeholderTextColor='gray'
          />
          <TabBarIcon onPress={onClear} name="close" color="gray" style={{ position: 'absolute', top: 15, right: 16 }} />
        </View>
        {
          search.length === 0 && (
            <>
              <View style={{ padding: 10, flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '500', color: 'gray', textAlign: 'center' }}>
                  Entrez un titre pour commencer la recherche.
                </Text>
              </View>
            </>
          )
        }
        {
          search.length > 0 && movies.length === 0 && (
            <>
              <View style={{ padding: 10, flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '500', color: Colors.light.text, textAlign: 'center' }}>
                  Désolé ! Nous n'avons pas ce titre.
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'gray', textAlign: 'center' }}>
                  Essayez de rechercher un autre titre.
                </Text>
              </View>
            </>
          )
        }
        {
         search.length > 0 && movies.length > 0 && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <Text style={[styles.text, {marginLeft: 22}]}>
                {movies.length} films trouvés
              </Text>
              <View style={styles.movieList}>
                {
                  movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} size="small" />
                  ))
                }
              </View>
            </ScrollView>
          )
        }

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
    fontSize: 20,
    fontWeight: '500',
    color: Colors.light.text,
  },
  movieList: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignItems: "center", 
    justifyContent: 'space-around', 
    padding: 10,
    gap: 15
  }

});