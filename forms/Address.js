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
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import {DropDown} from '../Components';

const radioButtonsData = [
  {
    id: '1',
    label: <Text style={{color: '#000000'}}>{'Male'}</Text>,
    value: 'option1',
    color: '#F7F7F7',
    selected: false,
  },
  {
    id: '2',
    label: <Text style={{color: '#A0A0A0'}}>{'Female'}</Text>,
    value: 'option2',
    color: '#F7F7F7',
    selected: false,
  },
];
const maritalStatusData = [
  {
    id: '1',
    label: <Text style={{color: '#A0A0A0'}}>{'Yes'}</Text>,
    value: 'option1',
    color: '#F7F7F7',
    selected: false,
  },
  {
    id: '2',
    label: <Text style={{color: '#A0A0A0'}}>{'No'}</Text>,
    value: 'option2',
    color: '#F7F7F7',
    selected: false,
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
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [radioButton2, setRadioButtons2] = useState(maritalStatusData);
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  function getValueofInput1() {
    console.log('Input is ' + familyName);
  }
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons2(radioButtonsArray);
  }

  //TextInput
  const [familyName, setFamilyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [nationalityAtBirth, setNationalityAtBirth] = useState('');
  const [presentNationality, setPresentNationality] = useState('');
  const [describe, setDescribe] = useState('');

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View>
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
          val={familyName}
          setVal={setFamilyName}
        />
        <CustomFileInput
          label="Present Address"
          val={fullName}
          setVal={setFullName}
        />
        <CustomFileInput
          label="Permanent Telephone no."
          val={maidenName}
          setVal={setMaidenName}
        />
        <CustomFileInput
          label="Present telephone no."
          val={dateOfBirth}
          setVal={setDateOfBirth}
        />

        {/* Display the selected date also triggers the date picker*/}
        <View
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
        </View>
        <CustomFileInput
          label="Present Nationality"
          val={presentNationality}
          setVal={setPresentNationality}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>Sex</Text>
            <RadioGroup
              layout="row"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
          <View>
            <Text style={styles.text}>Height</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.text}>Weight</Text>
            <TextInput style={styles.input} />
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
        <CustomFileInput
          label="Present Address"
          val={fullName}
          setVal={setFullName}
        />
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
