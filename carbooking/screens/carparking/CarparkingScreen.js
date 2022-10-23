import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import React from 'react';

const CarparkingScreen = () => {
  return (
    <View>
      <Text>Carparking</Text>
      <Card.Title
        title="Carparking Place"
        subtitle="สถานที่"
        left={props => <Avatar.Icon {...props} icon="folder" />}
        right={props => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Carparking Place"
        subtitle="สถานที่"
        left={props => <Avatar.Icon {...props} icon="folder" />}
        right={props => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
      <Card.Title
        title="Carparking Place"
        subtitle="สถานที่"
        left={props => <Avatar.Icon {...props} icon="folder" />}
        right={props => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default CarparkingScreen;

const styles = StyleSheet.create({});
