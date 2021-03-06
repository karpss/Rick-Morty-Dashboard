export interface CharacterDetailsProps {
  name: string;
  species: string;
  image: string;
  origin?: LocationOriginObject;
  location?: LocationOriginObject;
  gender: string;
  episode?: Array<any>;
}

export interface CharacterChapterProps {
  episodes: Array<EpisodeProps>;
  closePage: (e: any) => void;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

interface LocationOriginObject {
  name: string;
  url: string;
  created: string | null;
  dimension: string | null;
  id: number | null;
  residents: string[] | null;
  type: string | null;
}

export interface CharacterResponse {
  created: string;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: LocationOriginObject;
  name: string;
  origin: LocationOriginObject;
  species: string;
  type: string;
  url: string;
}

export interface EpisodeProps {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface EpisodeResponseProps {
  data: EpisodeProps;
  [key: string]: any;
}
