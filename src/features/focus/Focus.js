import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { sizing, colors } from '../../utils/styling';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type here"
            placeholderColor="grey"
            style={styles.input}
            onSubmitEditing={({ nativeEvent: { text } }) => {
              setSubject(text);
            }}
            theme={{
              colors: {
                placeholder: colors.primary,
                text: 'Black',
                primary: 'white',
                underlineColor: 'transparent',
                background: colors.secondary,
              },
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: sizing.lg,
    justifyContent: 'center',
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: sizing.lg,
  },
  inputContainer: {
    paddingTop: sizing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: sizing.md,
  },
});
