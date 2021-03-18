import React, {useCallback, useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {darkBackground} from '../../consts/theme';
import Tweets from './Tweets';
import Podcasts from './Podcasts';
import UpcomingGames from './UpcomingGames';
import {useStoreActions} from '../../store';

export type FeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FeedScreen'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

const FeedScreen = ({}: Props) => {
  const fetchTweets = useStoreActions((actions) => actions.fetchTweets);
  const fetchPodcasts = useStoreActions((actions) => actions.fetchPodcasts);
  const onRefresh = useCallback(() => {
    fetchPodcasts();
    fetchTweets();
  }, [fetchPodcasts, fetchTweets]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <ScrollView
      style={styles.view}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh}
          tintColor="white"
        />
      }>
      <Tweets />
      <Podcasts />
      <UpcomingGames />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: darkBackground,
    flex: 1,
    padding: 15,
  },
});

export default FeedScreen;
