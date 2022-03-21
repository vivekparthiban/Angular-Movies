import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';
import { Renderer2 } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";
describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const sampleInput = {"Poster": "https://m.media-amazon.com/images/M/MV5BOTQ1NTg4MDAtOGU0OS00ZGQwLTliZjQtNDEzZjAzZGI5MjFjXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
  "Title": "Honey, I Shrunk the Kids",
  "Type": "movie",
  "Year": "1989",
  "imdbID": "tt0097523",
  "Actors" : "Sample actors",
  "Ratings" : [{"Source" : "Internation Rating", "Value" : "8.0/10"}],
  "Plot" : "Test test test test"};
  const index = 0;
  class MockAppService {
    getDetails(imdbId : string) {
      return of(sampleInput);
    }
    elementClassModification(element : HTMLElement, renderer: Renderer2, cssClass : string, action : string) {

    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule, HttpClientModule , FormsModule, ReactiveFormsModule , MatCardModule, MatInputModule, NgxSpinnerModule],
      declarations: [ MovieCardComponent ],
      providers : [ Renderer2,
        { provide : AppService, useClass : MockAppService}, NgxSpinnerService]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(MovieCardComponent);
      component = fixture.componentInstance;
      component.movieData = sampleInput;
      component.itemIndex = 0;
      fixture.detectChanges();
    });
  });

  const movieApi = "https://www.omdbapi.com/?apikey=1a935f76&type=movie&r=json&i=tt3792960";
  const movieData = '{"Title":"The Brand New Testament","Year":"2015","Rated":"Not Rated","Released":"01 Sep 2015","Runtime":"114 min","Genre":"Comedy, Fantasy","Director":"Jaco Van Dormael","Writer":"Thomas Gunzig, Jaco Van Dormael","Actors":"Pili Groyne, Benoît Poelvoorde, Catherine Deneuve","Plot":"Did you know that God is alive and lives in Brussels with his daughter?","Language":"French, German","Country":"Belgium, France, Luxembourg","Awards":"15 wins & 25 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjM3OTAzMzYzNV5BMl5BanBnXkFtZTgwNTQ4MzU0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.1","imdbVotes":"31,916","imdbID":"tt3792960","Type":"movie","DVD":"23 Feb 2016","BoxOffice":"$127,910","Production":"N/A","Website":"N/A","Response":"True"}';

  it('should create Movie Card Component', () => {
    expect(component).toBeTruthy();
  });
});
