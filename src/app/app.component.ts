import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { SearchResult } from './model/search-result';
import { MediaObserver } from '@angular/flex-layout';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'omdb-movies';
  pageState : string = 'Initial';
  welcomeMessage : string = 'Welcome to OMDB Search, search something in the bar above!';
  errorMessage : string = 'Movies not found!';
  searchResponse : SearchResult = new SearchResult();
  searchValue : string = '';
  deviceSize : string = '';
  page: number = 1;
  count: number = 0;
  pageSize: number = 10;
  moviesList : Movie[] = [];
  constructor(private appService : AppService,
    private observableMedia: MediaObserver) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    this.observableMedia.asObservable().subscribe((change) => {
      this.deviceSize = change[0].mqAlias;
    });
  }

  onSearchClick() : void {
    this.appService.getMoviesPerPage(this.searchValue, 1).subscribe((res : SearchResult) => {
      this.searchResponse = res;
      if(res.Response == 'True') {
        if(this.searchResponse.Search.length > 0) {
          this.pageState = 'Loaded';
          this.moviesList = this.searchResponse.Search;
          this.count = Number(this.searchResponse.totalResults);
        } else {
          this.pageState = 'Error';
        }
      } else {
        this.pageState = 'Error';
      }
    });
  }

  onPageChange($event : number) {
    this.page = $event;
    this.appService.getMoviesPerPage(this.searchValue, $event).subscribe((res : SearchResult) => {
      this.moviesList = [];
      this.moviesList = res.Search;
    });
  }
}
