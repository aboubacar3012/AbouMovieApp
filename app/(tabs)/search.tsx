import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View>
      <Text>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
