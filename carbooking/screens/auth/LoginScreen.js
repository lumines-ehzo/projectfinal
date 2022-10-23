import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Text, HelperText} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const hasErrors = () => {
    return !username.includes('@');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Login</Text>
      <TextInput
        style={styles.inputText}
        label="Username"
        value={username}
        mode="flat"
        onChangeText={text => setUsername(text)}
      />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>

      <TextInput
        style={styles.inputText}
        label="Password"
        value={password}
        mode="flat"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        onChangeText={text => setPassword(text)}
      />

      <Button
        style={styles.btnLogin}
        mode="contained"
        right={<TextInput.Icon icon="back" />}
        onPress={() => console.log('Pressed')}>
        Login
      </Button>

      <Text style={styles.bottomText}>
        Don't have an account?
        <Text style={styles.bottomSpan}> Create an account</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

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
