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
    label: <Text style={{color: '#A0A0A0'}}>{'Male'}</Text>,
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
const RecieptAcknowledge = ({label, navigation}) => {
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
          <Text style={styles.headerText}>Personal History</Text>
        </View>
        <Text style={styles.instruction}>
          Please kindly fill this document. Signing where required
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.AcknowledgeName}>Dear John Doe</Text>
          <Text>
            It is a great pleasure to welcome you to Ecobank – eProcess
            International S.A. You are now part of an institution that has its
            own culture and set of values. To help you to understand and adapt
            quickly and easily to the Ecobank culture and values, we hereby
            provide you with various important documents that you are encouraged
            to read and understand.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecieptAcknowledge;
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
  AcknowledgeName: {
    marginBottom: 10,
    fontWeight: 20,
  },
  pickedDate: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  // This only works on iOS
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
