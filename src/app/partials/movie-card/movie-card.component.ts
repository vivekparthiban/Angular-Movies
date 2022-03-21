import { Component, OnInit, Input, Renderer2 } from '@angular/core';
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
  @Input()
  itemIndex !: number;
  cardSize : string = '';
  gridColumns = 1;
  currentMovieElement !: HTMLElement;
  constructor(
    private appService: AppService,
    private renderer : Renderer2
  ) {
   }

  ngOnInit(): void {
    this.cardSize = 'halfWidth';
    if(typeof document !== 'undefined') {
      const element = document.getElementById('cardGrid-'+this.itemIndex);
      if(element != null) {
        this.currentMovieElement = element;
      }
    }
  }

  showDetails(): void {
    this.cardSize = 'fullWidth';
    this.appService.getDetails(this.movieData.imdbID).subscribe((res: SearchResult) => {
      this.appService.elementClassModification(this.currentMovieElement, this.renderer, 'fullWidth', 'add');
    })
  }

  hideDetails() {
    this.cardSize = 'halfWidth';
    this.appService.getDetails(this.movieData.imdbID).subscribe((res: SearchResult) => {
      this.appService.elementClassModification(this.currentMovieElement, this.renderer, 'halfWidth', 'add');
    })
  }

}
