import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import MyText from './MyText';
import Podcast from '../entities/Podcast';

type Props = {podcast: Podcast};
const SinglePodcast = ({podcast}: Props) => {
  return (
    <View style={styles.podcastContainer}>
      <Image source={{uri: podcast.image}} style={styles.podcastImage} />
      <View>
        <MyText style={styles.podcastName}>{podcast.name}</MyText>
        <MyText style={styles.podcastTitle} numberOfLines={2}>
          {podcast.title}
        </MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  podcastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  podcastImage: {width: 50, height: 50, marginRight: 15, borderRadius: 25},
  podcastTitle: {
    flex: 1,
    flexWrap: 'wrap',
    width: Dimensions.get('screen').width - 100,
    marginTop: 5,
  },
  podcastName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
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

export default SinglePodcast;
