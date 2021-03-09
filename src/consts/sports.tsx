import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {blue} from './theme';

export type Sport = {
  name: string;
  getIcon: (isSelected: boolean) => React.ReactNode;
};

export const sports: Sport[] = [
  {
    name: 'Football',
    getIcon: (isSelected) => (
      <Ionicons
        name={'football'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'NBA',
    getIcon: (isSelected) => (
      <Ionicons
        name={'basketball'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'NFL',
    getIcon: (isSelected) => (
      <Ionicons
        name={'american-football'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'Formula 1',
    getIcon: (isSelected) => (
      <MaterialCommunityIcons
        name={'racing-helmet'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'Tennis',
    getIcon: (isSelected) => (
      <Ionicons
        name={'tennisball'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'MLB',
    getIcon: (isSelected) => (
      <Ionicons
        name={'baseball'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'Esports',
    getIcon: (isSelected) => (
      <MaterialIcons
        name={'sports-esports'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'MMA',
    getIcon: (isSelected) => (
      <MaterialIcons
        name={'sports-mma'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
  {
    name: 'Volleyball',
    getIcon: (isSelected) => (
      <MaterialIcons
        name={'sports-volleyball'}
        size={30}
        color={isSelected ? blue : 'white'}
      />
    ),
  },
];
