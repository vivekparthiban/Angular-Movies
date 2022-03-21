import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './model/search-result';

@Injectable()
export class AppService {

  readonly apikey = '1a935f76';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }

  getMoviesPerPage(titleValue: string, pageValue: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.api}&s=${titleValue}*&page=${pageValue}`);
  }

  getDetails(imdbTitle: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.api}&i=${imdbTitle}`);
  }

}
