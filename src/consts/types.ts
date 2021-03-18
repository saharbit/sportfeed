export type PredictHQResult = {
  id: string;
  title: string;
  description: string;
  category: string;
  labels: string[];
  rank: number;
  local_rank: number;
  aviation_rank: number;
  phq_attendance: number;
  entities: [
    {
      type: string;
      formatted_address: string;
      entity_id: string;
      name: string;
    },
  ];
  duration: number;
  start: string;
  end: string;
  updated: string;
  first_seen: string;
  timezone: string;
  location: number[];
  scope: string;
  country: string;
  place_hierarchies: [
    ['6295630', '6255149', '6252001', '6254926', '4952349', '8532042'],
    ['6295630', '6255149', '6252001', '6254926', '4952349', '4930956'],
  ];
  state: string;
  brand_safe: true;
};
export type SpotifyImages = {height: number; url: string; width: number}[];
export type SpotifyAPIResult = {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: 'https://open.spotify.com/episode/4YvxaEksqRa3Vr1cQa64iW';
  };
  href: string;
  id: string;
  images: SpotifyImages;
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: string;
  uri: string;
};
export type TweetResult = {created_at: string; id: string; text: string};
export type UserResult = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
};
