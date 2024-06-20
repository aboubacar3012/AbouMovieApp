import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, Button, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const HeroCard = () => {
  return (
    <View style={styles.heroContent}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.ebayimg.com/images/g/P60AAOSwyspc7CNL/s-l1200.jpg'
        }}
      />
      <View style={styles.buttons}>
        {/* Buttons with icons */}
        <View style={styles.buttonView}>
          <TabBarIcon name="play" color="white" />
          <Button
            color={Colors.light.text}
            title="Lecture"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <View style={styles.buttonView}>
          <TabBarIcon name="eye" color="white" />
          <Button
            color={Colors.light.text}
            title="Détails"
            onPress={() => Alert.alert('Simple Button pressed')}
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
    borderRadius: 10,
    backgroundColor: Colors.light.backgroundSecondary,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    height: 350,
    width: '100%',
    borderRadius: 10,
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
    marginVertical: 10,
  },
});