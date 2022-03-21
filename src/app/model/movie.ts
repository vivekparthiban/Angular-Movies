import { RatingDetail } from './ratings';
export class Movie {
  Title : string = '';
  Year : string = '';
  Poster : string = '';
  Plot : string = '';
  Actors : string = '';
  Ratings : RatingDetail[] = [];
  imdbID : string = '';
}
