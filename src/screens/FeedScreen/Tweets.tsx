import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStoreState} from '../../store';

const Tweets = () => {
  const [visibleTweets, setVisibleTweets] = useState(2);
  const tweets = useStoreState((state) => state.tweets);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MyText style={styles.header}>Tweets</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </View>
      {tweets.length > 0 ? (
        <View>
          {tweets.splice(0, visibleTweets).map((tweet, index) => (
            <View key={`tweet_${index}`} style={styles.tweetsContainer}>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
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
  showOlderText: {fontWeight: '500'},
});

export default Tweets;
