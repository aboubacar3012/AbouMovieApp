import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const MoviesListSkeleton = () => {
  const backgroundColor = useSharedValue(0);

  useEffect(() => {
    backgroundColor.value = withRepeat(
      withTiming(1, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [backgroundColor]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundColor.value,
        [0, 1],
        [Colors.light.backgroundTertiary, Colors.light.backgroundSecondary]
      ),
    };
  });

  return (
    <>
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
      <Animated.View style={[styles.image, animatedStyle]} />
    </>
  );
};

export default MoviesListSkeleton;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 100,
    borderRadius: 5,
  },
});
