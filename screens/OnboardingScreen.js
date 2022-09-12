/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors, images} from '../constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const OnboardingScreen = ({navigation}) => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    setTimeout(
      () =>
        translation.stopAnimation(value => {
          console.log('Final Value: ${value}');
          navigation?.navigate('SetUp');
        }),
      5000,
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={images.logo}
        resizeMode="contain"
        style={{
          height: 200,
          width: '100%',
          maxHeight: 350,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}
      />
      <Animated.View
        style={{
          marginTop: 50,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}>
        <Text style={{textAlign: 'center'}}> Powered by Ecobank Group</Text>
      </Animated.View>
      <Animated.Image
        source={images.bottom3}
        resizeMode="contain"
        style={{
          position: 'absolute',
          height: 500,
          width: '100%',
          bottom: 0,
          opacity: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 30,
    height: screenHeight - 0,
  },
});
