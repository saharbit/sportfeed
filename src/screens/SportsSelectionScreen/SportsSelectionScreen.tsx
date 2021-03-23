import React from 'react';
import {useState} from 'react';
import MyText from '../../components/MyText';
import SportsSelection from './SportsSelection';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {blue, darkBackground} from '../../consts/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SELECTED_SPORTS} from '../../consts/asyncStorage';

type SportsSelectionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SportsSelectionScreen'
>;

type Props = {
  navigation: SportsSelectionScreenNavigationProp;
  setUserSports: (sports: string[]) => void;
};

const SportsSelectionScreen = ({setUserSports}: Props) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  function selectSport(sport: string) {
    let sportSelected = selectedSports.find((name) => name === sport);

    if (sportSelected) {
      setSelectedSports(selectedSports.filter((name) => name !== sport));
    } else {
      setSelectedSports([...selectedSports, sport]);
    }
  }

  function onSubmit() {
    AsyncStorage.setItem(SELECTED_SPORTS, JSON.stringify(selectedSports));
    setUserSports(selectedSports);
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.view}>
      <MyText style={styles.header}>Select your favourite sports</MyText>
      <SportsSelection
        selectedSports={selectedSports}
        selectSport={selectSport}
      />
      <TouchableOpacity style={styles.letsGoButton} onPress={onSubmit}>
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
