import axios from 'axios';
import Config from 'react-native-config';
import {SpotifyAPIResult} from '../consts/types';
import Podcast from '../entities/Podcast';
import _ from 'lodash';

const popularPodcasts = [
  {
    id: '07SjDmKb9iliEzpNcN2xGD',
    name: 'The Bill Simmons Podcast',
  },
  {
    id: '2XdegS23ImVZldex799DUS',
    name: 'The Ryen Russillo Podcast',
  },
];

export const fetchPodcasts = async () => {
  try {
    const params: {[key: string]: string} = {grant_type: 'client_credentials'};
    const data = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');

    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      data,
      {
        headers: {
          Authorization: `Basic ${Config.SP_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    const SPOTIFY_TOKEN = authResponse.data.access_token;

    let podcasts: Podcast[] = [];
    for (let podcast of popularPodcasts) {
      const response = await axios.get(
        `https://api.spotify.com/v1/shows/${podcast.id}/episodes?market=US`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          },
        },
      );
      podcasts = [
        ...podcasts,
        ...response.data.items.map(
          (result: SpotifyAPIResult) =>
            new Podcast({...result, podName: podcast.name}),
        ),
      ];
    }
    return _.sortBy(podcasts, (pod) => pod.startDate).reverse();
  } catch (error) {
    console.error(error);
  }
};
