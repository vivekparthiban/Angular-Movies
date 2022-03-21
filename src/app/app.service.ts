import { Injectable, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './model/search-result';
import { Movie } from './model/movie';

@Injectable()
export class AppService {

  readonly apikey = '1a935f76';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }

  getMoviesPerPage(titleValue: string, pageValue: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.api}&s=${titleValue}*&page=${pageValue}`);
  }

  getDetails(imdbTitle: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.api}&i=${imdbTitle}`);
  }

  elementClassModification(element : HTMLElement, renderer: Renderer2, cssClass : string, action : string) {
    if(action == 'add') {
      renderer.addClass(element, cssClass);
    } else {
      renderer.removeClass(element, cssClass);
    }
  }

}
