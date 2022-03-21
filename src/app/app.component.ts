import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { SearchResult } from './model/search-result';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'omdb-movies';
  pageState : string = 'Initial';
  searchResponse : SearchResult = new SearchResult();
  searchValue : string = '';
  deviceSize : string = '';
  constructor(private appService : AppService,
    private observableMedia: MediaObserver) {
    this.searchResponse = new SearchResult();
  }

  ngOnInit(): void {
    this.appService.getMovies('The Avengers').subscribe((res : SearchResult) => {
      this.searchResponse = res;
      if(res.Response == 'True') {
        if(this.searchResponse.Search.length > 0) {
          this.pageState = 'Loaded';
        } else {
          this.pageState = 'Error';
        }
      } else {
        this.pageState = 'Error';
      }
    });
  }

  ngAfterViewInit() : void {
    this.observableMedia.asObservable().subscribe((change) => {
      this.deviceSize = change[0].mqAlias;
      console.info('device size = ', this.deviceSize);
    });
  }
}
