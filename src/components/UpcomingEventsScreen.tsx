import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {darkBackground} from '../theme';

type UpcomingEventsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UpcomingEventsScreen'
>;

type Props = {
  navigation: UpcomingEventsScreenNavigationProp;
};

const UpcomingEventsScreen = ({navigation}: Props) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.view}>
      <ActivityIndicator />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
    paddingVertical: 20,
  },
});

export default UpcomingEventsScreen;
