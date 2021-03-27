import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import commonStyles from '../../consts/styles';
import MyText from '../../components/MyText';
import {darkBackground} from '../../consts/theme';

const HighlightsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
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
    paddingHorizontal: 15,
  },
});

export default HighlightsScreen;
