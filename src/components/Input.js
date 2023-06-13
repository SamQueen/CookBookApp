import React from 'react';
import { Keyboard, StyleSheet, TextInput} from 'react-native';

export default function Input(props) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      secureTextEntry={props.secureEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    marginTop: '2%',
    marginBottom: '5%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#e8e8e8',
    position: 'relative',
    backgroundColor: 'white',
  },
});