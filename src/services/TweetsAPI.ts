import axios from 'axios';
import Config from 'react-native-config';
import Tweet from '../entities/Tweet';
import {TweetResult, UserResult} from '../consts/types';
import _ from 'lodash';

const userIds = [
  51263592, // Schefter
  50323173, // Woj
];

export const fetchTweets = async () => {
  try {
    let results: Tweet[] = [];

    for (let userId of userIds) {
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
      results = [
        ...results,
        ...tweetsResults.map(
          (result: TweetResult) => new Tweet({...result, ...user}),
        ),
      ];
    }
    return _.sortBy(results, (tweet) => tweet.createddate).reverse();
  } catch (error) {
    console.error(error);
  }
};
