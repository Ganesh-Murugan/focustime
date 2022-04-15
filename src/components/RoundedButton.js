import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/styling';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles(size).radius, style]}>
      <Text style={[styles(size).texts, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.secondary,
      borderWidth: 2,
    },
    texts: {
      color: colors.secondary,
      fontsize: size / 3,
    },
  });
