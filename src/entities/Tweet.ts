import {TweetResult, UserResult} from '../consts/types';

export default class Tweet {
  text: string;
  image: string;
  name: string;
  username: string;
  createddate: Date;

  constructor(result: TweetResult & UserResult) {
    this.text = result.text;
    this.image = result.profile_image_url;
    this.username = result.username;
    this.name = result.name;
    this.createddate = new Date(result.created_at);
  }
}
