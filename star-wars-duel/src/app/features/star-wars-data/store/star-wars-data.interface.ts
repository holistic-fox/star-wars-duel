import { Person } from '../models/person';
import { Starship } from '../models/starship';

export interface StarWarsDataInterface {
  people: Person[];
  ships: Starship[];
}

export const initialState: StarWarsDataInterface = {
  people: [],
  ships: [],
}
