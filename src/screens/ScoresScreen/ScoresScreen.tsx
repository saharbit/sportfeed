import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {darkBackground, lessDarkBackground} from '../../consts/theme';
import MyText from '../../components/MyText';

const TABS = ['All Games', 'NBA', 'NFL'];

const ScoresScreen = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity style={styles.tab} key={tab}>
            <MyText>{tab}</MyText>
          </TouchableOpacity>
        ))}
      </View>
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
  tabsContainer: {
    flexDirection: 'row',
  },
  tab: {
    padding: 5,
    backgroundColor: lessDarkBackground,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ScoresScreen;
