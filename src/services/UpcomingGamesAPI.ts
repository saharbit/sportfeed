import axios from 'axios';
import Config from 'react-native-config';
import {PredictHQResult} from '../consts/types';
import {UpcomingEvent} from '../entities/UpcomingEvent';

export const fetchUpcomingEvents = async (setUpcomingEvents: any) => {
  try {
    const response = await axios.get(
      'https://api.predicthq.com/v1/events/?category=sports&label=nba%2Cnfl&offset=0&sort=start',
      {
        headers: {
          Authorization: `Bearer ${Config.PHQ_TOKEN}`,
        },
      },
    );
    const events = response.data.results.map(
      (result: PredictHQResult) => new UpcomingEvent(result),
    );
    setUpcomingEvents(events);
  } catch (error) {
    console.error(error);
  }
};
