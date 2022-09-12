/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import dropDown from '../assets/images/dropDown.png';

const DropDown = ({data = [], value = {}, onSelect = () => {}}) => {
  console.log('selected value', value);
  const [showOption, setShowOptions] = useState(false);

  const onSelectedItem = val => {
    onSelect(val);
    setShowOptions(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropDown}
        activeOpacity={0.8}
        onPress={() => setShowOptions(!showOption)}>
        <Text>{value ? value?.name : `Choose an options`} </Text>
        <Image
          source={dropDown}
          style={{
            height: 15,
            alignItems: 'center',
            transform: [{rotate: showOption ? '180deg' : '0deg'}],
          }}
        />
      </TouchableOpacity>
      {showOption && (
        <View>
          {data.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectedItem(val)}
                style={{
                  backgroundColor: value == val ? 'pink' : 'white',
                  padding: 8,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}>
                <Text>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    width: 150,
  },
  dropDown: {
    backgroundColor: '#F7F7F7',
    padding: 8,
    borderRadius: 4,
    minHeight: 44,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 6,
    maxHeight: 100,
  },
});

export default DropDown;
