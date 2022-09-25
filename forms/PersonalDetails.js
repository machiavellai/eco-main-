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
import LogInScreen from '../screens/LogInScreen';
import {event} from 'react-native-reanimated';

// const Gender = [
//   {
//     id: '1',
//     label: <Text style={{color: '#000000'}}>{'Male'}</Text>,
//     value: 'option1',
//     color: '#F7F7F7',
//     selected: false,
//   },
//   {
//     id: '2',
//     label: <Text style={{color: '#000000'}}>{'Female'}</Text>,
//     value: 'option2',
//     color: '#F7F7F7',
//     selected: false,
//   },
// ];
// const StatusData = [
//   {
//     id: '1',
//     label: <Text style={{color: '#000000'}}>{'Yes'}</Text>,
//     value: 'option1',
//     color: '#F7F7F7',
//     selected: false,
//   },
//   {
//     id: '2',
//     label: <Text style={{color: '#000000'}}>{'No'}</Text>,
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
let disabilityCheck = [
  {
    id: 1,
    name: 'Yes',
  },
  {
    id: 2,
    name: 'No',
  },
];
let Gender = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
];
let Status = [
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
const DressCode = ({label, navigation}) => {
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
  const [clickedItem2, setClickedItem2] = useState(null);
  const onClick2 = init => {
    setClickedItem2(init);
  };
  const [touchedItem, setTouchedItem] = useState(null);
  const onTouch = product => {
    setTouchedItem(product);
  };

  const [tok, setToke] = useState('');

  // const [radioButtons, setRadioButtons] = useState(Gender);
  // const [radioButton2, setRadioButtons2] = useState(StatusData);
  const [datePicker, setDatePicker] = useState(false);
  const [datei, setDate] = useState(new Date());
  // const [genderButtons, setGenderButtons] = useState(Gender);
  // const [isPickerShow, setIsPickerShow] = useState(false);
  // const [] = useState(new Date(Date.now()));

  function getValueofInput1() {
    console.log('Input is ' + familyName + fullName);
  }

  function showDatePicker() {
    setDatePicker(true);
  }

  function OnDateSelected(event, datei) {
    console.log(datei, 'Date');
    setDate(datei);
    setDatePicker(false);
  }
  // function OnItemSelected(event, genderButtons) {
  //   console.log(genderButtons, 'Options');
  //   setGenderButtons(genderButtons);
  // }
  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  // function onPressRadioButton(radioButtonsArray) {
  //   setRadioButtons(radioButtonsArray);
  // }
  // function onPressRadioButton(radioButtonsArray) {
  //   setRadioButtons2(radioButtonsArray);
  // }

  //TextInput
  const [familyName, setFamilyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [nationalityAtBirth, setNationalityAtBirth] = useState('');
  // const [presentNationality, setPresentNationality] = useState('');
  const [describe, setDescribe] = useState('');

  let arrOfObj = [
    {id: 1, name: familyName},
    {id: 2, fullName},
    {id: 3, phoneNumber},
    {id: 4, name: datei},
    {id: 5, name: placeOfBirth},
    {id: 6, height},
    {id: 7, weight},
    {id: 8, name: nationalityAtBirth},
    // {id: 9, name: presentNationality},
  ];
  const setValue = event => {
    setFullName(e);
  };
  const setValue1 = event => {
    setFullName(e);
  };
  const setValue2 = event => {
    setHeight(e);
  };
  const setValue3 = event => {
    setWeight(e);
  };

  function handleChange(evt) {
    setPhoneNumber({phoneNumber: evt.target.value});
    setPlaceOfBirth({placeOfBirth: evt.target.value});
    setNationalityAtBirth({nationalityAtBirth: evt.target.value});
    // setPresentNationality({presentNationality: evt.target.value});
    setHeight({height: evt.target.value});
    // setGenderButtons({genderButtons: evt.target.value});

    // setDateOfBirth({dateOfBirth: evt.target.value});
  }
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View>
        {datePicker && (
          <RNDateTimePicker
            value={datei}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={OnDateSelected}
            style={styles.datePicker}
          />
        )}

        {/* {isPickerShow && (
          <DateTimePicker
            value={setDateOfBirth}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={handleChange}
            style={styles.datePicker}
            maximumDate={new Date(Date.now())}
            minimumDate={new Date(1970, 0, 1)}
          />
        )} */}
        <View style={styles.header}>
          <TouchableOpacity onPress={pressHandler}>
            <Ionicons name="chevron-back" color="#23557F" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Personal History</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly fill this document. Signing where required
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <CustomFileInput
          label="Family Name  (e.g., ADEKOLA)"
          val={familyName}
          setVal={setFamilyName}
          onChangeText={e => setFamilyName(e)}
        />
        <CustomFileInput
          label="Full Name (e.g., VICTOR MICHEAL )"
          val={fullName}
          setVal={setFullName}
          onChangeText={e => setFullName(e)}
        />
        <CustomFileInput
          label="Phone Number"
          val={phoneNumber}
          setVal={setPhoneNumber}
          onChange={handleChange}
        />
        {/* <CustomFileInput
          label="Date of Birth (Format: DD-MMM-YYYY)"
          val={dateOfBirth}
          setVal={setDateOfBirth}
        /> */}
        <CustomFileInput
          label="Place of Birth"
          val={placeOfBirth}
          setVal={setPlaceOfBirth}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Nationality at Birth"
          val={nationalityAtBirth}
          setVal={setNationalityAtBirth}
          onChange={handleChange}
        />
        <View>
          <Text style={[styles.text, {marginTop: 20, paddingBottom: 10}]}>
            Gender
          </Text>
          <DropDown value={clickedItem1} data={Sex} onSelect={onClick1} />
        </View>
        {/* Display the selected date also triggers the date picker*/}
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
        {/* <CustomFileInput
          label="Present Nationality"
          val={presentNationality}
          setVal={setPresentNationality}
          onChange={handleChange}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={[styles.text, {marginTop: 20, paddingBottom: 10}]}>
              Sex
            </Text>
            <DropDown value={clickedItem1} data={Sex} onSelect={onClick1} />
          </View>
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
          <DropDown value={selectedItem} data={Status} onSelect={onSelect} />
        </View>
        <View style={{marginBottom: 50}}>
          <Text style={[styles.text, {marginTop: 20}]}>
            Entry into Ecobank service might entail assignment and travel to any
            area of the world in which Ecfobank might have responsibilities.
            Have you any diabilities which might limit your prospective field of
            work or your ability to travel?
          </Text>
          <View>
            <Text style={[styles.text, {marginTop: 20, paddingBottom: 10}]}>
              Disability check
            </Text>
            <DropDown
              value={touchedItem}
              data={disabilityCheck}
              onSelect={onTouch}
            />
          </View>
          {/* <RadioGroup
            layout="row"
            radioButtons={radioButton2}
            onPress={onPressRadioButton}
          /> */}
          <CustomFileInput
            label='If "yes", please describe. '
            val={describe}
            setVal={setDescribe}
          />

          <Button onPress={presshandler2} title="Save me" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DressCode;
const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    paddingBottom: 30,
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
    marginLeft: 50,
    fontFamily: 'Roboto-Bold',
  },
  instruction: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    marginTop: 30,
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

// "userName": "Machiavelli",
//   "email": "Machiavelli@gmail.com",
//   "password": "Machiavelli09"
