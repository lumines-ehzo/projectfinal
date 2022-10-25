import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, BottomNavigation, Avatar} from 'react-native-paper';
const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const BookingDetailScreen = ({navigation}) => {
  const image = {uri: 'https://picsum.photos/700'};
  const [index, setIndex] = useState(0);
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
    <View style={styles.backGround}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.headingImg}>
        <View style={styles.emptyView}></View>
        <View style={styles.content}>
          <Text style={styles.namePlace}>Wat noi</Text>
          <Text style={styles.locationPlace}>
            Bangkok,Thailand <Text style={styles.txtMap}>Map Direction</Text>
          </Text>
          {/* Get Time Booking In Here */}
          <Text style={styles.locationPlace}>Start: 8AM To</Text>
          <View style={styles.hrLine}></View>
          <Text style={styles.topicPlace}>Detail</Text>
          <View style={styles.filedDetail}>
            <Text style={styles.topicText}>
              Name: <Text style={styles.spanContent}>AAA BBB</Text>
            </Text>
            <Text style={styles.topicText}>
              Type: <Text style={styles.spanContent}>Toyota</Text>
            </Text>
            <Text style={styles.topicText}>
              Status: <Text style={styles.spanContent}>Waiting</Text>
            </Text>
            <Text style={styles.topicText}>
              Rent: <Text style={styles.spanContent}>0฿</Text>
            </Text>
          </View>
          <Button
            style={styles.btnBook}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Back to home
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookingDetailScreen;

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#fff',
  },
  headingImg: {
    width: '100%',
    height: 310,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  emptyView: {
    height: 220,
  },
  content: {
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    // height: '80%',
  },
  hrLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  txtMap: {
    color: '#3ec97c',
  },
  namePlace: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 60,
    marginBottom: 10,
  },
  topicPlace: {
    color: '#3ec97c',
    fontWeight: '700',
    fontSize: 22,
    textDecorationLine: 'underline',
    textDecorationColor: '#3ec97c',
    paddingBottom: 10,
  },
  topicText: {
    color: '#3ec97c',
    fontWeight: '700',
    fontSize: 20,
    textDecorationColor: '#3ec97c',
    paddingBottom: 10,
  },
  detailPlace: {color: '#868686', paddingTop: 10, paddingBottom: 10},
  locationPlace: {color: '#868686', marginBottom: 25, fontWeight: '700'},
  textContent: {
    color: '#3ec97c',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    marginRight: 20,
  },
  textContent1: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    marginRight: 20,
  },
  spanContent: {
    color: '#868686',
    fontSize: 18,
    fontWeight: '700',
  },
  btnBook: {
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 100,
    backgroundColor: '#3ec97c',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  filedDetail: {
    marginLeft: 20,
  },
});
