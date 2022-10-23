import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const CarparkingDetailScreen = () => {
  return (
    <View>
      <Text>Carparking Detail</Text>
      <Card>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      </Card>
      <Text></Text>
      <Text></Text>
      <Text>Service Rate</Text>
      <Text>1Hr. </Text>
      <Text>2 - 7 50 Thb/Hr</Text>
    </View>
  );
};

export default CarparkingDetailScreen;

const styles = StyleSheet.create({});
