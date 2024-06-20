import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Link } from 'expo-router';

const MovieCard = () => {
  return (
    <Link href="/12343434">
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.ebayimg.com/images/g/P60AAOSwyspc7CNL/s-l1200.jpg'
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