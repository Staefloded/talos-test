type History = {
  price: number;
  timestamp: number;
};

type Team = {
  leader: { description: string; name: string; position: string };
  members: { name: string; position: string }[];
};

type Scores = {
  coinpaper: number;
};

type Blockchain = {
  algorithm: string;
  consensus: string;
  development_status: string;
  issue_date: string;
  organization_structure: string;
  type: string;
};

type TimestampType = {
  timestamp: number;
  price: number;
  volume: number;
};

type Descriptions = {
  future: string;
  introduction: string;
  one_sentence: string;
  technology: string;
};

export interface Overview {
  id: string;
  name: string;
  symbol: string;
  volume: number;
  price: number;
  price_24h_percentage_change: number;
  price_1h_percentage_change: number;
  price_7d_percentage_change: number;
  history_24h: History[];
  rank: number;
  scores: Scores;
  market_cap: number;
}

export interface Whitepaper {
  has_file: boolean;
  name: string;
  number_of_pages: number;
  symbol: string;
  keywords: string[];
  summary: string;
}

export interface Video {
  channel_name: string;
  description: string;
  name: string;
  symbol: string;
  thumbnail: string;
  title: string;
  url: string;
  video_id: string;
}

export interface Timestamp {
  history_1y: TimestampType[];
}

export interface Price {
  all_time_high_date: Date;
  all_time_high_percentage_drop: number;
  all_time_high_price: number;
  circulating_supply: number;
  market_cap: number;
  max_supply: number;
  name: string;
  price: number;
  price_1h_percentage_change: number;
  price_1y_percentage_change: number;
  price_3m_percentage_change: number;
  price_5y_percentage_change: number;
  price_7d_percentage_change: number;
  price_24h_percentage_change: number;
  price_30d_percentage_change: number;
  rank: number;
  symbol: number;
  total_supply: number;
  untrusted_volume: number;
  volume: number;
}

export interface Info {
  blockchain: Blockchain;
  descriptions: Descriptions;
  explorers: string[];
  founded: string;
  // github: Github;
  // manual_reviews:
  name: string;
  symbol: string;
  team: Team;
  website: string;
}
