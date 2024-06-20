import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import HeroCard from '@/components/HeroCard';
import MovieCard from '@/components/MovieCard';
import MoviesList from '@/components/MoviesList';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeroCard />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
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