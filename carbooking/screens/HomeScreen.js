import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Image
        style={styles.headingImg}
        source={require('../components/img/homescreen.png')}
      />
      <Text style={styles.headingText}>Find a place to park</Text>
      <Text style={styles.subText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Text>
      <Button
        style={styles.btnStarted}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Get Started
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#3ec97c',
  },
  headingImg: {
    width: '100%',
    height: 333,
    marginBottom: 30,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
    color: '#fff',
    textAlign: 'center',
  },
  subText: {
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20,
  },
  btnStarted: {
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 5,
    backgroundColor: '#2f2f2f',
    justifyContent: 'flex-end',
  },
});
