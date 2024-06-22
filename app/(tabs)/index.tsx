import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import PopularMovies from '@/components/Views/PopularMovies';
import UpComingMovies from '@/components/Views/UpComingMovies';
import NowPlayingMovies from '@/components/Views/NowPlayingMovies';
import TopRatedMovies from '@/components/Views/TopRatedMovies';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <PopularMovies />
        <TopRatedMovies />
        <NowPlayingMovies />
        <UpComingMovies />
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