import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStoreState} from '../../store';
import SinglePodcast from '../../components/SinglePodcast';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../../consts/styles';

const Podcasts = () => {
  const [visiblePodcasts, setVisiblePodcasts] = useState(2);
  const podcasts = useStoreState((state) => state.podcasts);
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={commonStyles.feedHeaderContainer}
        onPress={() => navigation.navigate('PodcastsScreen')}>
        <MyText style={commonStyles.feedHeader}>Podcasts</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </TouchableOpacity>
      <View>
        {podcasts.slice(0, visiblePodcasts).map((podcast, index) => (
          <SinglePodcast index={index} podcast={podcast} />
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
  showOlder: {fontWeight: '500'},
});

export default Podcasts;
