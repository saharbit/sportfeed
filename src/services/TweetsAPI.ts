import axios from 'axios';
import Config from 'react-native-config';
import Tweet from '../entities/Tweet';
import {TweetResult, UserResult} from '../consts/types';

export const fetchTweets = async (setTweets: any) => {
  try {
    const userId = 51263592;
    const response = await axios.get(
      `https://api.twitter.com/2/users/${userId}/tweets?expansions=author_id&tweet.fields=created_at&user.fields=profile_image_url,username,name`,
      {
        headers: {
          Authorization: `Bearer ${Config.TW_TOKEN}`,
        },
      },
    );
    let tweetsResults: TweetResult[] = response.data.data;
    let user: UserResult = response.data.includes.users[0];
    const tweets = tweetsResults.map(
      (result: TweetResult) => new Tweet({...result, ...user}),
    );
    setTweets(tweets);
  } catch (error) {
    console.error(error);
  }
};
