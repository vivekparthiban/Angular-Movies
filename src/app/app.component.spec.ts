import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Renderer2 } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AppService } from './app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule,
        MatCardModule, MatInputModule, BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [ Renderer2, AppService, MediaObserver]
    }).compileComponents();
  });

  const searchApi = "https://www.omdbapi.com/?apikey=1a935f76&type=movie&r=json&s=tes*&page=1";
  const searchApiData = '{"Search":[{"Title":"The Brand New Testament","Year":"2015","imdbID":"tt3792960","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjM3OTAzMzYzNV5BMl5BanBnXkFtZTgwNTQ4MzU0MDI@._V1_SX300.jpg"},{"Title":"Testament of Youth","Year":"2014","imdbID":"tt1441953","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAyOTI3OTgwMTdeQTJeQWpwZ15BbWU4MDAwNzM2NDUx._V1_SX300.jpg"},{"Title":"Beta Test","Year":"2016","imdbID":"tt4244162","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODdlMjU0MDYtMWQ1NC00YjFjLTgxMDQtNDYxNTg2ZjJjZDFiXkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg"},{"Title":"Guarding Tess","Year":"1994","imdbID":"tt0109951","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzFkM2RiNWQtOWQxNy00ZWNmLWIyZTktNmJjZmY1ZTliZjU1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Tess","Year":"1979","imdbID":"tt0080009","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjNkNGNlMGQtZmZkNS00YTRjLWJkMzktM2ZkNTA0MjA4YWJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"The Testament of Dr. Mabuse","Year":"1933","imdbID":"tt0023563","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWU4MDA0OTktMDNlZS00NDE2LTk2NTYtNDQ3YjNmYjJjMjNiXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"},{"Title":"Tesla","Year":"2020","imdbID":"tt5259822","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzg0MjQ0ODUtYTgyNC00Y2Y5LWE5NDctODY3ZTFkYmZkNGFiXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg"},{"Title":"Testament","Year":"1983","imdbID":"tt0086429","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE4ZTU0MDEtOTE1Ny00NGEwLWJkOWUtYzdmODRkYmEzNDFmXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"The Last Will and Testament of Rosalind Leigh","Year":"2012","imdbID":"tt2332831","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTQ4MzE3NTk3OV5BMl5BanBnXkFtZTgwNDAyODAzMDE@._V1_SX300.jpg"},{"Title":"The Beta Test","Year":"2021","imdbID":"tt11738830","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTE4ZjI4ZjMtMzJhOS00Y2U5LTg3YTAtZjcyZmU1NjAyNjRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"}],"totalResults":"1965","Response":"True"}';
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'omdb-movies'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('omdb-movies');
  });
});
