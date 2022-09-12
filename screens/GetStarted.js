import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors, images} from '../constants';

const GetStarted = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('License Agreement');
    // navigation.push('ReviewDetails');
  };

  return (
    <ImageBackground
      source={images.bottomDoodle}
      f
      imageStyle={{
        top: 300,
      }}
      resizeMode="contain">
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text>
            <Icon name="menu" size={40} color="#4385B7" />
          </Text>
          <Image source={images.profile_photo} />
        </View>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Image
            source={images.editedTeamUpSvg}
            resizeMode="contain"
            style={{width: '100%', height: 152}}
          />
          <Text style={styles.welcome}>We are glad you are here!</Text>
          <Text style={styles.subtitle}>
            This platform allows you to input your onboarding/post onboarding
            details thank you for choosing Ecobank
          </Text>
          <TouchableOpacity style={{marginTop: 30}} onPress={pressHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={images.bottomDoodle}
          resizeMode="cover"
          style={{
            top: 350,
            position: 'absolute',
            left: -100,
          }}
        />
        <Image
          source={images.mockup}
          resizeMode="cover"
          style={{
            top: 350,
            position: 'absolute',
            left: -140,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 60,
    paddingRight: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    color: '#777779',
    marginTop: 24,
  },
  button: {
    backgroundColor: colors.blue,
    width: 165,
    height: 44,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
});
