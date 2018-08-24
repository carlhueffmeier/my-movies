import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../_types/movie';
import { MovieDetails } from '../_types/movieDetails';
import { Category } from '../_types/category';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseUrl: string = config.API;

  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + '/discover');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/categories');
  }

  getCategoryMovies(categoryId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + `/categories/${categoryId}`);
  }

  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.baseUrl + `/movie/${movieId}`);
  }

  getSearchResults(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + `/search?q=${query}`);
  }
}
