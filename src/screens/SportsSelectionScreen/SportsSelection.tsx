import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MyText from '../../components/MyText';
import {sports} from '../../consts/sports';
import {blue, lessDarkBackground} from '../../consts/theme';

type Props = {
  selectedSports: string[];
  selectSport: (name: string) => void;
};

const SportsSelection = ({selectedSports, selectSport}: Props) => {
  return (
    <View style={styles.sportsContainer}>
      {sports.map(({name, getIcon}, index) => {
        const isSelected = !!selectedSports.find((sport) => sport === name);
        const Icon = getIcon(isSelected);

        return (
          <TouchableOpacity
            style={{
              ...styles.sportContainer,
              ...(isSelected ? styles.sportsContainerSelected : {}),
            }}
            key={index}
            onPress={() => selectSport(name)}>
            {Icon}
            <MyText
              style={{
                ...styles.sportText,
                ...(isSelected ? styles.sportTextSelected : {}),
              }}>
              {name}
            </MyText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  sportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  sportContainer: {
    backgroundColor: lessDarkBackground,
    height: 100,
    width: 100,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  sportsContainerSelected: {
    borderWidth: 4,
    borderColor: blue,
  },
  sportText: {
    fontWeight: '700',
  },
  sportTextSelected: {
    color: blue,
  },
  sportImage: {
    height: 50,
    width: 50,
  },
});

export default SportsSelection;
