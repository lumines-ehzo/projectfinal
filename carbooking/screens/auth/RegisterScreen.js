import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Text, HelperText} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //   const hasErrors = () => {
  //     return !username.includes('');
  //   };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Get started with your first</Text>
      <Text style={styles.headingText}>booking on App</Text>
      <TextInput
        style={styles.inputText}
        label="Username"
        value={username}
        mode="flat"
        onChangeText={text => setUsername(text)}
      />
      {/* <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText> */}

      <TextInput
        style={styles.inputText}
        label="Password"
        value={password}
        mode="flat"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        onChangeText={text => setPassword(text)}
      />

      <TextInput
        style={styles.inputText}
        label="Confirm Password"
        value={confirmPassword}
        mode="flat"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        onChangeText={text => setPassword(text)}
      />

      <Button
        style={styles.btnLogin}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Sign Up
      </Button>

      <Text style={styles.bottomText}>
        Have an account?
        <Text style={styles.bottomSpan}> Login Now</Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
  },
  bottomText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 16,
  },
  bottomSpan: {
    fontWeight: '700',
    color: '#80247e',
  },
  inputText: {
    marginBottom: 20,
  },
  btnLogin: {
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 20,
    backgroundColor: '#3ec97c',
  },
});
