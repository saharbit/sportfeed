import {HighlightResult} from '../consts/types';
import Highlight from '../entities/Highlights';

export const fetchNBAHighlights = async () => {
  try {
    return [].map((result: HighlightResult) => new Highlight(result));
  } catch (error) {}
};
