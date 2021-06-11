import Tweet from './entities/Tweet';
import Podcast from './entities/Podcast';
import {UpcomingEvent} from './entities/UpcomingEvent';
import {
  Action,
  action,
  createStore,
  createTypedHooks,
  Thunk,
  thunk,
} from 'easy-peasy';
import {fetchPodcasts} from './services/PodcastsAPI';
import {fetchTweets} from './services/TweetsAPI';
import Highlight from './entities/Highlights';
import {fetchNBAHighlights} from './services/HighlightsAPI';

type StoreModel = {
  podcasts: Podcast[];
  setPodcasts: Action<StoreModel, Podcast[]>;
  fetchPodcasts: Thunk<StoreModel>;
  tweets: Tweet[];
  setTweets: Action<StoreModel, Tweet[]>;
  fetchTweets: Thunk<StoreModel>;
  upcomingEvents: UpcomingEvent[];
  highlights: Highlight[];
  setHighlights: Action<StoreModel, Highlight[]>;
  fetchHighlights: Thunk<StoreModel>;
};

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const storeModel: StoreModel = {
  podcasts: [],
  setPodcasts: action((state, payload) => {
    state.podcasts = payload;
  }),
  fetchPodcasts: thunk(async (actions) => {
    const pods = await fetchPodcasts();
    actions.setPodcasts(pods || []);
  }),
  tweets: [],
  setTweets: action((state, payload) => {
    state.tweets = payload;
  }),
  fetchTweets: thunk(async (actions) => {
    const tweets = await fetchTweets();
    actions.setTweets(tweets || []);
  }),
  upcomingEvents: [],
  highlights: [],
  setHighlights: action((state, payload) => {
    state.highlights = payload;
  }),
  fetchHighlights: thunk(async (actions) => {
    const highlights = await fetchNBAHighlights();
    actions.setHighlights(highlights || []);
  }),
};

const store = createStore(storeModel);

export default store;
