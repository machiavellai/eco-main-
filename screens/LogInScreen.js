/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {images, colors} from '../constants';
import {CustomButton, CustomInput} from '../Components';
import {secureGet, secureSave} from '../External Variable/Storage';

const LogInScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    userName: '',
    password: '',
  });
  const [tok, setToke] = useState('');
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.userName) {
      handleError(
        'Please input  your username \n \nShould contain one letter, one number and be at least 8 characters long',
        'userName',
      );
      valid = false;
    } else if (inputs.userName < 8) {
      handleError('Min Password length of 8', 'userName');
      valid = false;
    }
    if (!inputs.password) {
      handleError(
        'Please input password \n \nShould contain one letter, one number and be at least 8 characters long',
        'password',
      );
      valid = false;
    } else if (inputs.password < 8) {
      handleError('Min Password length of 8', 'password');
      valid = false;
    }

    try {
      // const values = {
      //   userName: 'Oyindamola',
      //   email: 'oyindamola20@gmail.com',
      //   password: 'oyindamola',
      // };
      // console.log('values', values);
      var InsertAPIURL = 'https://onboarding-app-1.herokuapp.com/staff/login';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(inputs),
      })
        .then(response => {
          const d = response.json();
          console.log(d, 'here');
          return d;
        })
        .then(async response => {
          const {message} = response;
          const token = response.token;
          console.log('hello', token);
          secureSave('token', token);
          if (message == 'Thank you for registering') {
            console.log(message);
            console.log(response);
          }
          secureGet('token', setToke);
          console.log('hello2', tok);
          if (valid) {
            // register();
            navigation.navigate('Get Started');
          }
          alert(message);
          console.log(response);
          console.log(inputs);
        })
        .catch(e => console.log(e, 'error'));
    } catch (error) {
      console.log(error);
      // alert('Error Occured' + ErrorMessage);
    }
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ImageBackground
      source={images.doodle}
      resizeMode="cover"
      imageStyle={{opacity: 0.2, backgroundColor: '#4385B7'}}
      // blurRadius={30}
      style={{flex: 1}}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 20}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingTop: 30, paddingHorizontal: 20}}
          bounces={true}>
          <View style={styles.body}>
            <Text style={styles.header}>We are glad to have you!</Text>
            <Text style={styles.subtitle}>
              Sign in to continue with onboarding
            </Text>
            <View style={styles.input}>
              <CustomInput
                label="Username"
                onChangeText={text => handleOnChange(text, 'userName')}
                error={errors.userName}
                onFocus={() => {
                  handleError(null, 'userName');
                }}
              />

              <CustomInput
                label="Password"
                error={errors.password}
                onChangeText={text => handleOnChange(text, 'password')}
                onFocus={() => {
                  handleError(null, 'password');
                }}
              />

              <View style={styles.customButton}>
                <CustomButton title="SIGN IN" onPress={validate} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Logo: {
    height: 200,
    width: '100%',
    maxHeight: 350,
  },
  powered: {
    fontSize: 12,
    color: '#C4C4C4',
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'Roboto',
  },
  header: {
    fontSize: 25,
    paddingTop: 180,
    paddingBottom: 5,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.blue,
  },
  body: {
    marginTop: 30,
  },

  subtitle: {
    color: colors.darkBlue,
    fontSize: 13,
    marginBottom: 35,
  },

  input: {
    marginVertical: 20,
    marginBottom: 10,
  },

  customButton: {
    paddingTop: 80,
  },
});

export default LogInScreen;
