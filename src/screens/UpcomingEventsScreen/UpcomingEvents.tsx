import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MyText from '../../components/MyText';
import {darkBackground, lessDarkBackground} from '../../consts/theme';
import {UpcomingEventsScreenNavigationProp} from './UpcomingEventsScreen';
import {UpcomingEvent} from '../../consts/UpcomingEvent';

type Props = {
  upcomingEvents: {[key: string]: UpcomingEvent[]};
  navigation: UpcomingEventsScreenNavigationProp;
};

const UpcomingEvents = ({upcomingEvents, navigation}: Props) => {
  return (
    <View>
      {Object.entries(upcomingEvents).map(([date, events]) => (
        <View key={date}>
          <MyText style={styles.dateText}>{date}</MyText>
          {events.map((event) => (
            <TouchableOpacity
              style={styles.eventContainer}
              key={event.id}
              onPress={() => navigation.navigate('EventScreen', {event})}>
              <View style={styles.iconContainer}>{event.Icon}</View>
              <View style={styles.textContainer}>
                <MyText style={styles.sportName}>{event.sport}</MyText>
                <MyText style={styles.eventTitle} numberOfLines={1}>
                  {event.title}
                </MyText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: lessDarkBackground,
    padding: 15,
    marginRight: 10,
  },
  sportName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  eventTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  textContainer: {
    justifyContent: 'center',
  },
});

export default UpcomingEvents;
