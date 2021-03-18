import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UpcomingGames = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <MyText style={styles.header}>Upcoming Events</MyText>
        <AntDesign name={'arrowright'} size={30} color={'white'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default UpcomingGames;
