import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
  Button,
} from 'react-native';
import {CustomFileInput} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import {DropDown} from '../Components';

// const radioButtonsData = [
//   {
//     id: '1',
//     label: <Text style={{color: '#000000'}}>{'Male'}</Text>,
//     value: 'option1',
//     color: '#F7F7F7',
//     selected: false,
//   },
//   {
//     id: '2',
//     label: <Text style={{color: '#A0A0A0'}}>{'Female'}</Text>,
//     value: 'option2',
//     color: '#F7F7F7',
//     selected: false,
//   },
// ];
// const maritalStatusData = [
//   {
//     id: '1',
//     label: <Text style={{color: '#A0A0A0'}}>{'Yes'}</Text>,
//     value: 'option1',
//     color: '#F7F7F7',
//     selected: false,
//   },
//   {
//     id: '2',
//     label: <Text style={{color: '#A0A0A0'}}>{'No'}</Text>,
//     value: 'option2',
//     color: '#F7F7F7',
//     selected: false,
//   },
// ];
let Sex = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
];
let maritalStatus = [
  {
    id: 1,
    name: 'Single',
  },
  {
    id: 2,
    name: 'Married',
  },
  {
    id: 3,
    name: 'Separated',
  },
  {
    id: 4,
    name: 'Widow (er)',
  },
  {
    id: 5,
    name: 'Divorced',
  },
];
const Address = ({label, navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Home Screen');
  };
  const presshandler2 = () => {
    console.log(arrOfObj);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const [clickedItem1, setClickedItem1] = useState(null);
  const onClick1 = content => {
    setClickedItem1(content);
  };

  const [tok, setToke] = useState('');
  const [datePicker, setDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function getValueofInput1() {
    console.log('Input is ' + familyName);
  }
  const showPicker = () => {
    setIsPickerShow(true);
  };

  function OnDateSelected(event, dateOfBirth) {
    console.log(dateOfBirth, 'Date');
    setDateOfBirth(dateOfBirth);
    setDatePicker(false);
  }
  const onChange = (event, value) => {
    setDateOfBirth(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  // function onPressRadioButton(radioButtonsArray) {
  //   setRadioButtons(radioButtonsArra2y);
  // }
  // function onPressRadioButton(radioButtonsArray) {
  //   setRadioButtons2(radioButtonsArray);
  // }

  //TextInput
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentTelephone_no, setPermanentTelephone_No] = useState('');
  const [presentTelephone_no, setPresentTelephone_No] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [presentNationality, setPresentNationality] = useState('');

  let arrOfObj = [
    {id: 1, permanentAddress},
    {id: 2, presentAddress},
    {id: 3, permanentTelephone_no},
    {id: 4, dateOfBirth},
    {id: 5, presentTelephone_no},
    {id: 6, height},
    {id: 7, weight},
    {id: 8, presentNationality},
  ];
  const setValue2 = event => {
    setHeight(e);
  };
  const setValue3 = event => {
    setWeight(e);
  };
  function handleChange(evt) {}
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View>
        {datePicker && (
          <RNDateTimePicker
            value={dateOfBirth}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={OnDateSelected}
            style={styles.datePicker}
          />
        )}
        {/* {isPickerShow && (
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
        )} */}
        <View style={styles.header}>
          <TouchableOpacity onPress={pressHandler}>
            <Ionicons name="chevron-back" color="#23557F" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Address</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly fill this document. Signing where required
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <CustomFileInput
          label="Permanent Adress"
          val={permanentAddress}
          setVal={setPermanentAddress}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Present Address"
          val={presentAddress}
          setVal={setPresentAddress}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Permanent Telephone no."
          val={permanentTelephone_no}
          setVal={setPermanentTelephone_No}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Present telephone no."
          val={presentTelephone_no}
          setVal={setPresentTelephone_No}
          onChange={handleChange}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          {!datePicker && (
            <View>
              <View style={styles.pickedDateContainer}></View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={
                  {flexDirection: 'row'}[(styles.button, styles.buttonOutline)]
                }>
                <Ionicons
                  name="chevron-down-outline"
                  size={24}
                  color="#A0A0A0"
                />
                <Text style={styles.buttonOutlineText}>DATEOFBIRTH</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* Display the selected date also triggers the date picker*/}
        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{marginRight: 10}}>
            <Text style={styles.textDatePicker}>Date of birth </Text>
            <View style={styles.pickedDateContainer}>
              <Text style={styles.pickedDate}>{date.toDateString()}</Text>
              <TouchableOpacity
                onPress={showPicker}
                style={{flexDirection: 'row'}}>
                <Ionicons
                  name="chevron-down-outline"
                  size={24}
                  color="#A0A0A0"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
        <CustomFileInput
          label="Present Nationality"
          val={presentNationality}
          setVal={setPresentNationality}
          onChange={handleChange}
        />
        <View>
          <Text style={[styles.text, {marginTop: 20, paddingBottom: 10}]}>
            Sex
          </Text>
          <DropDown value={clickedItem1} data={Sex} onSelect={onClick1} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          {/* <View>
            <Text>Sex</Text>
            <RadioGroup
              layout="row"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View> */}
          <View>
            <Text style={styles.text}>Height</Text>
            <TextInput
              style={styles.input}
              val={height}
              setVal={setHeight}
              // onChange={handleChange}
              onChangeText={e => setHeight(e)}
            />
          </View>
          <View>
            <Text style={styles.text}>Weight</Text>
            <TextInput
              style={styles.input}
              val={weight}
              setVal={setWeight}
              // onChange={handleChange}
              onChangeText={e => setWeight(e)}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.text, {marginTop: 20, paddingBottom: 10}]}>
            Marital Status
          </Text>
          <DropDown
            value={selectedItem}
            data={maritalStatus}
            onSelect={onSelect}
          />
        </View>
        {/* <CustomFileInput
          label="Present Address"
          val={fullName}
          setVal={setFullName}
        /> */}

        <Button onPress={presshandler2} title="Save me" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;
const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    flex: 0,
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.blue,
    marginLeft: 90,
    fontFamily: 'Roboto-Bold',
  },
  instruction: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 10,
  },
  pickedDateContainer: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 4,
    flexDirection: 'row',
    width: 150,
  },
  pickedDate: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  // This only works on iOS
  datePicker: {
    width: 370,
    height: 230,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textDatePicker: {
    marginBottom: 10,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  input: {
    backgroundColor: colors.textInputGrey,
    height: 44,
    borderRadius: 4,
    marginTop: 10,
    width: 60,
  },
});
