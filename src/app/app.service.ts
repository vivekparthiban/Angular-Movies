import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './model/search-result';

@Injectable()
export class AppService {

  readonly apikey = '1a935f76';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }

  getMovies(titleValue: string): Observable<SearchResult> {
    const apiUrl = `${this.api}&s=${titleValue}*`;
    return this.http.get<SearchResult>(apiUrl);
  }

  getMoviesAtPage(titleValue: string, pageValue: number): Observable<any> {
    return this.http.get(`${this.api}&s=${titleValue}*&page=${pageValue}`);
  }

  getDetails(imdbTitle: string): Observable<SearchResult> {
    const apiUrl = `${this.api}&i=${imdbTitle}`;
    return this.http.get<SearchResult>(apiUrl);
  }

}
