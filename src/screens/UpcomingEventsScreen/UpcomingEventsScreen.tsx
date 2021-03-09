import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {darkBackground} from '../../consts/theme';
import axios from 'axios';
import {PredictHQResult} from '../../consts/types';
import _ from 'lodash';
import dayjs from 'dayjs';
import UpcomingEvents from './UpcomingEvents';
import Config from 'react-native-config';
import {UpcomingEvent} from '../../consts/UpcomingEvent';

export type UpcomingEventsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UpcomingEventsScreen'
>;

type Props = {
  navigation: UpcomingEventsScreenNavigationProp;
};

const UpcomingEventsScreen = ({navigation}: Props) => {
  const [upcomingEvents, setUpcomingEvents] = useState<{
    [date: string]: UpcomingEvent[];
  }>({});

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get(
          'https://api.predicthq.com/v1/events/?category=sports&label=nba%2Cnfl&offset=0&sort=start',
          {
            headers: {
              Authorization: `Bearer ${Config.TOKEN}`,
            },
          },
        );
        const events = response.data.results.map(
          (result: PredictHQResult) => new UpcomingEvent(result),
        );
        const upcomingEventsByDate = _.groupBy(events, (event) =>
          dayjs(event.startDate).format('DD/MM/YYYY'),
        );
        setUpcomingEvents(upcomingEventsByDate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingEvents();
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.view}>
      {Object.keys(upcomingEvents).length > 0 ? (
        <UpcomingEvents
          upcomingEvents={upcomingEvents}
          navigation={navigation}
        />
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
    padding: 20,
  },
});

export default UpcomingEventsScreen;
