import React from 'react';
import {useState} from 'react';
import MyText from '../../components/MyText';
import SportsSelection from './SportsSelection';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {blue, darkBackground} from '../../consts/theme';

type SportsSelectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SportsSelectionScreen'
>;

type Props = {
  navigation: SportsSelectionScreenNavigationProp;
};

const SportsSelectionScreen = ({navigation}: Props) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  function selectSport(sport: string) {
    let sportSelected = selectedSports.find((name) => name === sport);

    if (sportSelected) {
      setSelectedSports(selectedSports.filter((name) => name !== sport));
    } else {
      setSelectedSports([...selectedSports, sport]);
    }
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.view}>
      <MyText style={styles.header}>Select your favourite sports</MyText>
      <SportsSelection
        selectedSports={selectedSports}
        selectSport={selectSport}
      />
      <TouchableOpacity
        style={styles.letsGoButton}
        onPress={() => navigation.navigate('FeedScreen')}>
        <MyText style={styles.letsGoButtonText}>Let's go</MyText>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
    paddingVertical: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  letsGoButton: {
    backgroundColor: blue,
    paddingVertical: 15,
    paddingHorizontal: 75,
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  letsGoButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SportsSelectionScreen;
