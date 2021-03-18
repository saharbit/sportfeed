import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MyText from '../../components/MyText';
import {fetchPodcasts} from '../../services/PodcastsAPI';
import Podcast from '../../entities/Podcast';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [visiblePodcasts, setVisiblePodcasts] = useState(2);
  
  useEffect(() => {
    fetchPodcasts(setPodcasts);
  }, []);

  return (
    <View>
      <MyText style={styles.header}>Podcasts</MyText>
      <View>
        {podcasts.slice(0, visiblePodcasts).map((podcast) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image
              source={{uri: podcast.image}}
              style={{width: 50, height: 50, marginRight: 10}}
            />
            <MyText>{podcast.title}</MyText>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => setVisiblePodcasts(visiblePodcasts + 2)}>
          <MyText style={{fontWeight: '500'}}>Show older</MyText>
        </TouchableOpacity>
      </View>
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

export default Podcasts;
