import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BlankScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BlankScreen</Text>
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: '#3ec97c',
  },
});
