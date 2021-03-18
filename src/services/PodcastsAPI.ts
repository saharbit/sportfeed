import axios from 'axios';
import Config from 'react-native-config';
import {SpotifyAPIResult} from '../consts/types';
import Podcast from '../entities/Podcast';

export const fetchPodcasts = async (setPodcasts: any) => {
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

    const response = await axios.get(
      'https://api.spotify.com/v1/shows/07SjDmKb9iliEzpNcN2xGD/episodes?market=US',
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_TOKEN}`,
        },
      },
    );
    const podcasts = response.data.items.map(
      (result: SpotifyAPIResult) => new Podcast(result),
    );
    setPodcasts(podcasts);
  } catch (error) {
    console.error(error);
  }
};
