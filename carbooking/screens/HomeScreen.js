import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, FAB, Portal, Provider} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [state, setState] = React.useState({open: false});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;
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
        onPress={() => navigation.navigate('Carparking')}>
        Get Started
      </Button>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {icon: 'plus', onPress: () => console.log('Pressed add')},
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
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
    color: '#2f2f2f',
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
