/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants';

export default function CustomButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 50,
        width: '100%',
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 30,
      }}>
      <Text
        style={{
          color: colors.white,
          fontSize: 13,
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
