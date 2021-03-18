import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {darkBackground} from '../../consts/theme';
import Tweets from './Tweets';
import Podcasts from './Podcasts';
import UpcomingGames from './UpcomingGames';

export type FeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FeedScreen'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const FeedScreen = ({}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  return (
    <ScrollView
      style={styles.view}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
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
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default FeedScreen;
