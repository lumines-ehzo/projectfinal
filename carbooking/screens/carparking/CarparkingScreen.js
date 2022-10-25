import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card, Searchbar, Title, Paragraph} from 'react-native-paper';
import React, {useState, useEffect} from 'react';

const CarparkingScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.headingText}>Let's book your</Text>
          <Text style={styles.headingText}>place</Text>
          <View style={styles.content}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <ScrollView></ScrollView>
            <View style={styles.showCard}>
              <Card onPress={() => navigation.navigate('CarparkingDetail')}>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
              </Card>
            </View>
            <View>
              <Card onPress={() => navigation.navigate('CarparkingDetail')}>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CarparkingScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3ec97c',
    height: '30%',
  },
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    padding: 15,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
    color: '#fff',
  },
  headingTopic: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2f2f2f',
    marginBottom: 10,
    marginTop: 10,
  },
  headingCard: {},
  content: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  showCard: {
    marginTop: 20,
    marginBottom: 20,
  },
});
