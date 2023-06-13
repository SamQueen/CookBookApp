import React from 'react';
import { StyleSheet, Button} from 'react-native';

export default function Input(props) {
  return (
    <Button 
        title="Sign In"
        style={styles.button}
        onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
  }
});