import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie';
import { AppService } from '../../app.service';
import { SearchResult } from 'src/app/model/search-result';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movieData!: Movie;
  cardSize : string = '';
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.cardSize = 'halfWidth';
    console.info('Movie Data = ', this.movieData);
  }

  showDetails(): void {
    this.cardSize = 'fullWidth';
    console.info(this.movieData.imdbID)
    this.appService.getDetails(this.movieData.imdbID).subscribe((res: SearchResult) => {
      console.info('movie response = ', res);
    })
  }

}
