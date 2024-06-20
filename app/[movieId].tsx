import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export default function SingleMovie() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.heroContent}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.ebayimg.com/images/g/P60AAOSwyspc7CNL/s-l1200.jpg'
            }}
          />
        </View>

        <View style={styles.infos}>
          <View style={styles.title}>
            <Text style={styles.text}>Titre du film</Text>
            <Text style={{ color: Colors.light.text }}>2021 - 1h 30min</Text>
          </View>

          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.buttons}>
              <View style={styles.buttonView}>
                <Button
                  color={Colors.light.text}
                  title="Comedy"
                />
              </View>
              <View style={styles.buttonView}>
                <Button
                  color={Colors.light.text}
                  title="Crime"
                />
              </View>
              <View style={styles.buttonView}>
                <Button
                  color={Colors.light.text}
                  title="Crime"
                />
              </View>
              <View style={styles.buttonView}>
                <Button
                  color={Colors.light.text}
                  title="Crime"
                />
              </View>
            </View>
          </ScrollView>

          <Text style={styles.synospisTitle}>Synopsis</Text>
          <ScrollView horizontal={false}>
            <Text style={styles.synopsisContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla ac libero sit amet libero aliquet aliquam. Proin sit amet purus id libero fermentum aliquam.
              Nullam nec nunc nec purus tincidunt tincidunt nec vel libero. Nulla facilisi.
              Sed auctor, mi et ultricies facilisis, odio libero dictum nunc, nec ultricies felis nunc vel purus.
              Nulla facilisi. Sed auctor, mi et ultricies facilisis, odio libero dictum nunc, nec ultricies felis nunc vel purus.
              Nulla facilisi. Sed auctor, mi et ultricies facilisis, odio libero dictum nunc, nec ultricies felis nunc vel purus. Nulla facilisi. Sed auctor, mi et ultricies facilisis, odio libero dictum nunc, nec ultricies felis nunc vel purus.
            </Text>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.backgroundPrimary,
    height: '100%',
    flex: 1,
    overflow: 'scroll'
  },
  heroContent: {
    margin: "auto",
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    height: 400,
    width: '100%',
    borderRadius: 30,
  },
  text: {
    color: Colors.light.text,
    fontSize: 25,
    fontWeight: '500',
  },
  infos: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 10
  },
  buttonView: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundSecondary,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  synospisTitle: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  synopsisContent: {
    color: Colors.light.text,
    fontSize: 15,
    marginVertical: 10,
  }

});