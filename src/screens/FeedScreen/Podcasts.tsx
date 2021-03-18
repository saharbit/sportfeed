import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStoreState} from '../../store';

const Podcasts = () => {
  const [visiblePodcasts, setVisiblePodcasts] = useState(2);
  const podcasts = useStoreState((state) => state.podcasts);

  return (
    <View>
      <View style={styles.headerContainer}>
        <MyText style={styles.header}>Podcasts</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </View>
      <View>
        {podcasts.slice(0, visiblePodcasts).map((podcast, index) => (
          <View key={`podcast_${index}`} style={styles.podcastContainer}>
            <Image source={{uri: podcast.image}} style={styles.podcastImage} />
            <View>
              <MyText style={styles.podcastName}>{podcast.name}</MyText>
              <MyText style={styles.podcastTitle} numberOfLines={2}>
                {podcast.title}
              </MyText>
            </View>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => setVisiblePodcasts(visiblePodcasts + 2)}>
          <MyText style={styles.showOlder}>Show older</MyText>
        </TouchableOpacity>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginVertical: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  showOlder: {fontWeight: '500'},
});

export default Podcasts;
