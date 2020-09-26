import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    flexDirection: 'row',
  },
  image:{
    width: 20, height: 20
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

const LoginButton = ({color, textColor, icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.button,
        {
          backgroundColor: color,
          borderWidth: !color ? 1 : 0,
        },
      ]}>
      <Image style={style.image} source={icon} />
      <Text style={[style.text, { color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
