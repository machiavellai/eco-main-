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
import {CustomDescInput} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import {DropDown} from '../Components';

const radioButtonsData = [
  {
    id: '1',
    label: <Text style={{color: '#212529'}}>{'Male'}</Text>,
    value: 'option1',
    color: '#F7F7F7',
    selected: false,
  },
  {
    id: '2',
    label: <Text style={{color: '#212529'}}>{'Female'}</Text>,
    value: 'option2',
    color: '#F7F7F7',
    selected: false,
  },
];
const maritalStatusData = [
  {
    id: '1',
    label: <Text style={{color: '#212529'}}>{'Yes'}</Text>,
    value: 'option1',
    color: '#F7F7F7',
    selected: false,
  },
  {
    id: '2',
    label: <Text style={{color: '#212529'}}>{'No'}</Text>,
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
const EmergencyContact = ({label, navigation, sublabel}) => {
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
    console.log('Input is ' + employeeName);
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
  const [employeeName, setEmployeeName] = useState('');
  const [fullName, setFullName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [nationalityAtBirth, setNationalityAtBirth] = useState('');
  // const [presentNationality, setPresentNationality] = useState('');
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
          <Text style={styles.headerText}>Emergency Contact</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly download and upload attached the filled document.
          Signing where required{' '}
        </Text>
        <Text style={styles.instruction2}>Staff Member Information </Text>
      </View>
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <CustomFileInput
          label="Employee Name"
          include
          val={employeeName}
          setVal={setEmployeeName}
        />
        <CustomFileInput
          label="Job Title"
          // style={{color: '#212529'}}
          val={fullName}
          setVal={setFullName}
          e33333
        />
        <Text style={[styles.textD, {marginTop: 20}]}>
          In case of emergency please contact the following persons:
        </Text>
        <Text style={[styles.textA, {marginTop: 20}]}>Contact 1: </Text>
        <CustomFileInput label="Name" val={maidenName} setVal={setMaidenName} />
        {/* <CustomFileInput
          label="Date of Birth (Format: DD-MMM-YYYY)"
          val={dateOfBirth}
          setVal={setDateOfBirth}
        /> */}
        <CustomFileInput
          label="Relationship with employee"
          val={placeOfBirth}
          setVal={setPlaceOfBirth}
        />
        <CustomFileInput
          label="Contacts Telephone Number"
          val={nationalityAtBirth}
          setVal={setNationalityAtBirth}
        />
        <CustomFileInput
          label="Contacts Address"
          val={nationalityAtBirth}
          setVal={setNationalityAtBirth}
        />
        <Text style={[styles.textA, {marginTop: 20}]}>Contact 2: </Text>
        <CustomFileInput label="Name" val={maidenName} setVal={setMaidenName} />
        {/* <CustomFileInput
          label="Date of Birth (Format: DD-MMM-YYYY)"
          val={dateOfBirth}
          setVal={setDateOfBirth}
        /> */}
        <CustomFileInput
          label="Relationship with employee"
          val={placeOfBirth}
          setVal={setPlaceOfBirth}
        />
        <CustomFileInput
          label="Contacts Telephone Number"
          val={nationalityAtBirth}
          setVal={setNationalityAtBirth}
        />
        <CustomFileInput
          label="Contacts Address"
          val={nationalityAtBirth}
          setVal={setNationalityAtBirth}
        />
        <CustomFileInput
          label='If "yes", please describe. '
          val={describe}
          setVal={setDescribe}
        />
        <CustomDescInput />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmergencyContact;
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
    paddingBottom: 15,
  },
  instruction: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 10,
    color: colors.black,
  },
  instruction2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    // marginTop: 20,
    // marginBottom: 10,
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
  textD: {
    fontFamily: 'Roboto-Regular',
    color: colors.blue,
    fontSize: 15,
  },
  textA: {
    fontFamily: 'Roboto-Regular',
    color: colors.blacks,
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
