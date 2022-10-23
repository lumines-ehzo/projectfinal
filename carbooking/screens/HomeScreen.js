import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import React from 'react';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const HomeScreen = () => {
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
    <View>
      <Text>Test</Text>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3ec97c',
  },
});
