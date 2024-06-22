import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useRouter } from 'expo-router';
import { Movie } from '@/types/movie';
type HeroCardProps = {
  movie: Movie;
}
const HeroCard = ({ movie }: HeroCardProps) => {
  const router = useRouter();

  if(!movie) return null;
  return (
    <View style={styles.heroContent}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        }}
      />
      <View style={styles.buttons}>
        {/* Buttons with icons */}
        <View style={styles.buttonView}>
          <TabBarIcon name="play" color="white" />
          <Button
            color={Colors.light.text}
            title="Lecture"
            onPress={() => router.push(`/${movie.id}`)}
          />
        </View>
        <View style={styles.buttonView}>
          <TabBarIcon name="plus" color="white" />
          <Button
            color={Colors.light.text}
            title="Ma liste"
            onPress={() => router.push(`/${movie.id}`)}
          />
        </View>
      </View>
    </View>
  )
}

export default HeroCard;


const styles = StyleSheet.create({
  heroContent: {
    margin: "auto",
    backgroundColor: Colors.light.backgroundSecondary,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: 350,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'stretch',
  },
  buttons: {
    flexDirection: "row",
    gap: 20
  },
  buttonView: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundPrimary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});