import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MyText from '../../components/MyText';
import {fetchTweets} from '../../services/TweetsAPI';
import Tweet from '../../entities/Tweet';

const Tweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [visibleTweets, setVisibleTweets] = useState(2);
  
  useEffect(() => {
    fetchTweets(setTweets);
  }, []);

  return (
    <View style={styles.container}>
      <MyText style={styles.header}>Tweets</MyText>
      {tweets.length > 0 ? (
        <View style={{flex: 1}}>
          {tweets.splice(0, visibleTweets).map((tweet, index) => (
            <View key={`tweet_${index}`} style={styles.tweetsContainer}>
              <Image
                source={{uri: tweet.image}}
                style={{width: 50, height: 50, marginRight: 10}}
              />
              <View>
                <View style={{flexDirection: 'row'}}>
                  <MyText style={{fontWeight: 'bold', marginRight: 5}}>
                    {tweet.name}
                  </MyText>
                  <MyText>@{tweet.username}</MyText>
                </View>
                <MyText style={{flex: 1}}>{tweet.text}</MyText>
              </View>
            </View>
          ))}
          <TouchableOpacity onPress={() => setVisibleTweets(visibleTweets + 2)}>
            <MyText style={styles.showOlderText}>Show older</MyText>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  tweetsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  showOlderText: {fontWeight: '500'},
});

export default Tweets;
