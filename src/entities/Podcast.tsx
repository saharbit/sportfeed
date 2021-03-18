import {SpotifyAPIResult} from '../consts/types';

export default class Podcast {
  name: string;
  title: string;
  startDate: Date;
  image: string;

  constructor(result: SpotifyAPIResult & {podName: string}) {
    this.name = result.podName;
    this.title = result.name;
    this.startDate = new Date(result.release_date);
    this.image = result.images[0].url;
  }
}
