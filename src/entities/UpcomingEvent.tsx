import React from 'react';
import {Sport, sports} from '../consts/sports';
import {PredictHQResult} from '../consts/types';
import {View} from 'react-native';
import MyText from '../components/MyText';

export class UpcomingEvent {
  title: string;
  id: string;
  labels: string[];
  sport: string;
  Icon: React.ReactNode;
  startDate: Date;

  constructor(result: PredictHQResult) {
    this.id = result.id;
    this.title = result.title;
    this.labels = result.labels;
    const sport = UpcomingEvent._getSport(result.labels);
    this.sport = sport.name;
    this.Icon = sport.getIcon(false);
    this.startDate = new Date(result.start);
  }

  private static _getSport(labels: string[]): Sport {
    if (labels.find((label) => label === 'nba')) {
      return sports.find((sport) => sport.name === 'NBA')!;
    }
    if (labels.find((label) => label === 'nfl')) {
      return sports.find((sport) => sport.name === 'NFL')!;
    }

    return sports[0];
  }

  render() {
    return (
      <View>
        <MyText>{this.title}</MyText>
      </View>
    );
  }
}
