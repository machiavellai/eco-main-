/* eslint-disable prettier/prettier */
import React from 'react';
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

const LogInScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    let regec = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(regec)) {
      handleError('Please input a valid email', 'email');
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

    if (valid) {
      navigation.navigate('Get Started');
    }
  };

  // const register = () => {
  //   setLoading(true);
  // };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  //   //Login Logic
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(
  //       {
  //         username: 'maemunah',
  //         password: 'Machiavelli09'
  //        })
  // };

  // const postLogin = async () => {
  //     try {
  //         await fetch(
  //             'https://reqres.in/api/posts', requestOptions)
  //             .then(response => {
  //                 response.json()
  //                     .then(data => {
  //                         Alert.alert("Post created at : ",
  //                         data.createdAt);
  //                     });
  //             })
  //     }
  //     catch (error) {
  //         console.log(error);
  //     }
  // }

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
                label="Email or Phone"
                onChangeText={text => handleOnChange(text, 'email')}
                error={errors.email}
                onFocus={() => {
                  handleError(null, 'email');
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
