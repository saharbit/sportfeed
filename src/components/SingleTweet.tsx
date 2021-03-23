import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import MyText from './MyText';
import Tweet from '../entities/Tweet';

type Props = {tweet: Tweet};
const SingleTweet = ({tweet}: Props) => {
  return (
    <View style={styles.tweetsContainer}>
      <Image source={{uri: tweet.image}} style={styles.image} />
      <View>
        <View style={styles.tweetContainer}>
          <MyText style={styles.tweetName}>{tweet.name}</MyText>
          <MyText>@{tweet.username}</MyText>
        </View>
        <MyText style={styles.tweetText} numberOfLines={2}>
          {tweet.text}
        </MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetName: {
    fontWeight: 'bold',
    marginRight: 5,
    flexWrap: 'wrap',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  tweetContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  tweetsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  tweetText: {
    flex: 1,
    flexWrap: 'wrap',
    width: Dimensions.get('screen').width - 100,
    marginTop: 5,
  },
});

export default SingleTweet;
