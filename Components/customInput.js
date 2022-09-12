/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../constants';
import {Ionicons} from 'react-native-vector-icons/Ionicons';

export default function CustomInput({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{marginBottom: 30}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.blue
              : colors.subGrey,
            alignItems: 'center',
          },
        ]}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: colors.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Ionicons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off-outline' : 'eye'}
            color="#A2A2A3"
            size={24}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: colors.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 18,
    color: colors.grey,
    fontWeight: '600',
  },
  inputContainer: {
    height: 44,
    backgroundColor: colors.textInputGrey,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0,
  },
});
