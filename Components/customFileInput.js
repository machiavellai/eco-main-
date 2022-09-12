/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../constants';

const CustomFileInput = ({label, val, setVal}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TextInput style={styles.input} onChangeText={setVal} value={val} />
      {/* <TextInput style={styles.input2} onChange={setVal} value={val} /> */}
    </View>
  );
};

export default CustomFileInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.textInputGrey,
    height: 44,
    borderRadius: 4,
    marginTop: 10,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginTop: 20,
  },
});
