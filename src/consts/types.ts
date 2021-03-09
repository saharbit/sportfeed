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
