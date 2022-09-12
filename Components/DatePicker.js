/* eslint-disable prettier/prettier */
// App.js
import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DatePicker({label}) {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View>
      {/* Display the selected date also triggers the date picker*/}
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toDateString()}</Text>
        <TouchableOpacity onPress={showPicker} style={{flexDirection: 'row'}}>
          <Ionicons name="chevron-down-outline" size={24} color="#4385B7" />
        </TouchableOpacity>
      </View>

      {/* The button that used to trigger the date picker */}
      {/* {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )} */}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
          maximumDate={new Date(Date.now())}
          minimumDate={new Date(1970, 0, 1)}
        />
      )}
    </View>
  );
}

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 4,
    flexDirection: 'row',
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    color: '#A0A0A0',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginTop: 20,
  },
});
