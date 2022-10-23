import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Card,
  IconButton,
  BottomNavigation,
  TextInput,
  Button,
  Text,
} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const BookingScreen = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [plate, setPlate] = useState('');
  const [type, setType] = useState('');
  const [timeBooking, setTimeBooking] = useState('');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'albums', title: 'Albums', focusedIcon: 'album'},
    {key: 'recents', title: 'Recents', focusedIcon: 'history'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Booking</Text>
      {/* <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={props => <Avatar.Icon {...props} icon="folder" />}
        right={props => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      /> */}
      <Text>Place:</Text>
      <TextInput
        style={styles.inputText}
        label="Name"
        value={name}
        mode="flat"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputText}
        label="Tel"
        value={tel}
        mode="flat"
        onChangeText={text => setTel(text)}
      />
      <TextInput
        style={styles.inputText}
        label="Plate"
        value={plate}
        mode="flat"
        onChangeText={text => setPlate(text)}
      />
      <TextInput
        style={styles.inputText}
        label="Type"
        value={type}
        mode="flat"
        onChangeText={text => setType(text)}
      />
      <TextInput
        style={styles.inputText}
        label="TimeBooking"
        value={timeBooking}
        mode="flat"
        onChangeText={text => setTimeBooking(text)}
      />

      <Button
        style={styles.btnLogin}
        mode="contained"
        // right={<TextInput.Icon icon="eye" />}
        onPress={() => console.log('Pressed')}>
        Booking
      </Button>

      {/* <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      /> */}
    </View>
  );
};

export default BookingScreen;

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
