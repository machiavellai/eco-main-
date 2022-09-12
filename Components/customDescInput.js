import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
// import React from 'react';
import {colors} from '../constants';

const CustomDescInput = ({label, val, setVal}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TextInput style={styles.input} onChangeText={setVal} value={val} />
    </View>
  );
};

export default CustomDescInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.textInputGrey,
    height: 90,
    borderRadius: 4,
    marginTop: 4,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginTop: 5,
  },
});
