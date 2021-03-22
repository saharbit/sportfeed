import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStoreState} from '../../store';
import SingleTweet from '../../components/SingleTweet';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../../consts/styles';

const Tweets = () => {
  const [visibleTweets, setVisibleTweets] = useState(2);
  const tweets = useStoreState((state) => state.tweets);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={commonStyles.feedHeaderContainer}
        onPress={() => navigation.navigate('TweetsScreen')}>
        <MyText style={commonStyles.feedHeader}>Tweets</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </TouchableOpacity>
      {tweets.length > 0 ? (
        <View>
          {tweets.splice(0, visibleTweets).map((tweet, index) => (
            <SingleTweet tweet={tweet} index={index} />
          ))}
          <TouchableOpacity onPress={() => setVisibleTweets(visibleTweets + 2)}>
            <MyText style={styles.showOlderText}>Show older</MyText>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  showOlderText: {fontWeight: '500'},
});

export default Tweets;
