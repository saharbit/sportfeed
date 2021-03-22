import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useStoreState} from '../../store';
import MyText from '../../components/MyText';
import SingleTweet from '../../components/SingleTweet';
import {darkBackground} from '../../consts/theme';
import commonStyles from '../../consts/styles';

const TweetsScreen = () => {
  const tweets = useStoreState((state) => state.tweets);

  return (
    <View style={styles.container}>
      <View style={commonStyles.feedHeaderContainer}>
        <MyText style={styles.header}>Tweets</MyText>
      </View>
      <ScrollView>
        {tweets.length > 0 ? (
          tweets.map((tweet, index) => (
            <SingleTweet tweet={tweet} index={index} />
          ))
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  container: {
    backgroundColor: darkBackground,
    flex: 1,
    padding: 15,
  },
});

export default TweetsScreen;
