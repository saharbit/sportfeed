import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyles from '../../consts/styles';

const UpcomingGames = () => {
  return (
    <View>
      <View style={commonStyles.feedHeaderContainer}>
        <MyText style={commonStyles.feedHeader}>Upcoming Events</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UpcomingGames;
