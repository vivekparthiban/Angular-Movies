import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { SearchResult } from './model/search-result';
import { MediaObserver } from '@angular/flex-layout';
import { Movie } from './model/movie';
import { NgxSpinnerService } from "ngx-spinner";
import { debounceTime, distinctUntilChanged, pipe, ReplaySubject, Subject } from 'rxjs';

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
  /* inputChangeSubject : Subject<string> = new ReplaySubject<string>(); */
  constructor(private appService : AppService,
    private observableMedia: MediaObserver,
    private spinnerService : NgxSpinnerService) {
  }

  ngOnInit(): void {
    /* this.observeInputChanged(); */
  }

  ngAfterViewInit() : void {
    this.observableMedia.asObservable().subscribe((change) => {
      this.deviceSize = change[0].mqAlias;
    });
  }

  /* observeInputChanged() {
    this.inputChangeSubject.pipe(debounceTime(200), distinctUntilChanged()).subscribe((value : string) => {
      this.searchValue = value;
      this.onSearchClick();
    })
  } */

  onSearchClick() : void {
    this.spinnerService.show();
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
        setTimeout(() => {
          this.spinnerService.hide();
        }, 2000);
      } else {
        this.pageState = 'Error';
        setTimeout(() => {
          this.spinnerService.hide();
        }, 2000);
      }
    });
  }

  handleEnterSearch(value : string) {
    this.searchValue = value;
    this.onSearchClick();
  }

  /* onPredictiveSearch($event : string) {
    this.inputChangeSubject.next($event);
  } */

  onPageChange($event : number) {
    this.spinnerService.show();
    this.page = $event;
    this.appService.getMoviesPerPage(this.searchValue, $event).subscribe((res : SearchResult) => {
      this.moviesList = [];
      this.moviesList = res.Search;
      setTimeout(() => {
        this.spinnerService.hide();
      }, 2000);
    });
  }
}
