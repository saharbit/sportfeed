import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from '../../components/MyText';
import {fetchUpcomingEvents} from '../../services/UpcomingGamesAPI';
import {UpcomingEvent} from '../../entities/UpcomingEvent';

const UpcomingGames = () => {
  const [upcomingGames, setUpcomingGames] = useState<UpcomingEvent[]>([]);
  useEffect(() => {
    fetchUpcomingEvents(setUpcomingGames);
  }, []);
  return (
    <View>
      <MyText style={styles.header}>Upcoming Games</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
});

export default UpcomingGames;
