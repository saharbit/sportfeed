import {SpotifyAPIResult} from '../consts/types';

export default class Podcast {
  title: string;
  startDate: Date;
  image: string;

  constructor(result: SpotifyAPIResult) {
    this.title = result.name;
    this.startDate = new Date(result.release_date);
    this.image = result.images[0].url;
  }
}
