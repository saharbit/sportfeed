import {HighlightResult} from '../consts/types';

export default class Highlight {
  title: string;
  url: string;

  constructor(result: HighlightResult) {
    this.title = result.title;
    this.url = result.url;
  }
}
