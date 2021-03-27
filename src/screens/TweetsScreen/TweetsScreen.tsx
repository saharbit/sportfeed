import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useStoreActions, useStoreState} from '../../store';
import MyText from '../../components/MyText';
import SingleTweet from '../../components/SingleTweet';
import {darkBackground} from '../../consts/theme';
import commonStyles from '../../consts/styles';

const TweetsScreen = () => {
  const {tweets} = useStoreState((state) => state);
  const {fetchTweets} = useStoreActions((actions) => actions);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  return (
    <View style={styles.container}>
      <View style={commonStyles.feedHeaderContainer}>
        <MyText style={commonStyles.feedHeader}>Tweets</MyText>
      </View>
      <ScrollView>
        {tweets.length > 0 ? (
          tweets.map((tweet, index) => (
            <SingleTweet tweet={tweet} key={`tweet_${index}`} />
          ))
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkBackground,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default TweetsScreen;
