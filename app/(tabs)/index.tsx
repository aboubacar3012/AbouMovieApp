import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.backgroundPrimary,
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.light.text,
  },
});