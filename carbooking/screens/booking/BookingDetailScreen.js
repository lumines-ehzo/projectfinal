import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import React from 'react';

const BookingDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookingDetail</Text>
      <Card>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      </Card>
    </View>
  );
};

export default BookingDetailScreen;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 20,
  },
});
