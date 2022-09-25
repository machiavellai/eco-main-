import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, images} from '../constants';

const ThankYou = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Home Screen');
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Image
          source={images.completion}
          resizeMode="contain"
          style={{width: '100%', height: 152}}
        />
        <Text style={styles.welcome}>We are glad you are here!</Text>
        <Text style={styles.subtitle}>
          Successfully sent! All your details will now be submitted to your
          manager for review. You will now be receiving an email from the Human
          Resource department welcoming you onboard.
        </Text>
        <TouchableOpacity style={{marginTop: 30}} onPress={pressHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>GO TO DASHBOARD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThankYou;

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    color: '#777779',
    marginTop: 24,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 60,
    paddingRight: 20,
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
