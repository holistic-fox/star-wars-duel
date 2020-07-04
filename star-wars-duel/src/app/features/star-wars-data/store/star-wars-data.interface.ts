import { Person } from '../models/person';
import { Starship } from '../models/starship';

export interface StarWarsDataInterface {
  loading: {
    people: boolean;
    starships: boolean;
  };
  people: Person[];
  starships: Starship[];
}

export const initialState: StarWarsDataInterface = {
  loading: {
    people: false,
    starships: false,
  },
  people: [],
  starships: [],
}

export const starWarsStoreName = 'star_wars_data';
