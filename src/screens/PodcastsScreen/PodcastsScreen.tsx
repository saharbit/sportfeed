import React from 'react';
import {useStoreState} from '../../store';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import MyText from '../../components/MyText';
import {darkBackground} from '../../consts/theme';
import SinglePodcast from '../../components/SinglePodcast';
import commonStyles from '../../consts/styles';

const PodcastsScreen = () => {
  const podcasts = useStoreState((state) => state.podcasts);

  return (
    <View style={styles.container}>
      <View style={commonStyles.feedHeaderContainer}>
        <MyText style={commonStyles.feedHeader}>Podcasts</MyText>
      </View>
      <ScrollView>
        {podcasts.length > 0 ? (
          podcasts.map((podcast, index) => (
            <SinglePodcast podcast={podcast} key={`pod_${index}`} />
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

export default PodcastsScreen;
