import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/native';
import MyText from '../../components/MyText';
import {darkBackground} from '../../consts/theme';

type EventScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EventScreen'
>;

type EventScreenRouteProp = RouteProp<RootStackParamList, 'EventScreen'>;

type Props = {
  navigation: EventScreenNavigationProp;
  route: EventScreenRouteProp;
};

const EventScreen = ({route}: Props) => {
  const {event} = route.params;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.view}>
      <MyText>{event.title}</MyText>
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

export default EventScreen;
