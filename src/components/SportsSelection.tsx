import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from './MyText';
import Icon from 'react-native-vector-icons/FontAwesome';

const sports = ['Football', 'NBA', 'Formula 1'];

const SportsSelection = () => {
  return (
    <View style={styles.sportsContainer}>
      {sports.map((sport, index) => (
        <View style={styles.sportContainer} key={index}>
          <Icon name="rocket" size={30} color="#900" />
          <MyText style={styles.sportText}>{sport}</MyText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sportContainer: {
    backgroundColor: '#363a3f',
    height: 100,
    width: 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sportText: {
    fontWeight: '600',
  },
  sportImage: {
    height: 50,
    width: 50,
  },
});

export default SportsSelection;
