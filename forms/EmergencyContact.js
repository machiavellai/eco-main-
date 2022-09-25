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

const EmergencyContact = ({label, navigation, sublabel}) => {
  const pressHandler = () => {
    navigation.navigate('Home Screen');
  };
  const presshandler2 = () => {
    console.log(arrOfObj);
  };

  function getValueofInput1() {
    console.log('Input is ' + employeeName);
  }
  const showPicker = () => {
    setIsPickerShow(true);
  };
  const [tok, setToke] = useState('');
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
  const [employeeName, setEmployeeName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [contactName_one, setcontactName_One] = useState('');
  const [contactName_one_number, setContactName_One_Number] = useState('');
  const [contactName_one_address, setContactName_One_Address] = useState('');
  const [contactName_one_relationship, setContactName_One_Relationship] =
    useState('');
  const [contactName_two, setcontactName_Two] = useState('');
  const [contactName_two_number, setContactName_Two_Number] = useState('');
  const [contactName_two_address, setContactName_Two_Address] = useState('');
  const [contactName_two_relationship, setContactName_Two_Relationship] =
    useState('');
  let arrOfObj = [
    {id: 1, name: employeeName},
    {id: 2, jobTitle},
    {id: 3, contactName_one},
    {id: 4, name: contactName_one_number},
    {id: 5, name: contactName_one_address},
    {id: 6, contactName_one_relationship},
    {id: 7, contactName_two},
    {id: 8, name: contactName_two_number},
    {id: 9, name: contactName_two_address},
    {id: 9, name: contactName_two_relationship},
    // {id: 9, name: presentNationality},
  ];

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
          val={employeeName}
          setVal={setEmployeeName}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Job Title"
          val={jobTitle}
          setVal={setJobTitle}
          onChange={handleChange}
        />
        <Text style={[styles.textD, {marginTop: 20}]}>
          In case of emergency please contact the following persons:
        </Text>
        <Text style={[styles.textA, {marginTop: 20}]}>Contact 1: </Text>
        <CustomFileInput
          label="Name"
          val={contactName_one}
          setVal={setcontactName_One}
          onChange={handleChange}
        />
        {/* <CustomFileInput
          label="Date of Birth (Format: DD-MMM-YYYY)"
          val={dateOfBirth}
          setVal={setDateOfBirth}
        /> */}
        <CustomFileInput
          label="Relationship with employee"
          val={contactName_one_relationship}
          setVal={setContactName_One_Relationship}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Contacts Telephone Number"
          val={contactName_one_number}
          setVal={setContactName_One_Number}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Contacts Address"
          val={contactName_one_address}
          setVal={setContactName_One_Address}
          onChange={handleChange}
        />
        <Text style={[styles.textA, {marginTop: 20}]}>Contact 2: </Text>
        <CustomFileInput
          label="Name"
          val={contactName_two}
          setVal={setcontactName_Two}
          onChange={handleChange}
        />
        {/* <CustomFileInput
          label="Date of Birth (Format: DD-MMM-YYYY)"
          val={dateOfBirth}
          setVal={setDateOfBirth}
        /> */}
        <CustomFileInput
          label="Relationship with employee"
          val={contactName_two_relationship}
          setVal={setContactName_Two_Relationship}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Contacts Telephone Number"
          val={contactName_two_number}
          setVal={setContactName_Two_Number}
          onChange={handleChange}
        />
        <CustomFileInput
          label="Contacts Address"
          val={contactName_two_address}
          setVal={setContactName_Two_Address}
          onChange={handleChange}
        />

        {/* <CustomDescInput /> */}
        <Button onPress={presshandler2} title="Save me" />
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
