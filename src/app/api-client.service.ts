import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { MovieDetails } from './movieDetails';
import { Category } from './category';
import { Observable } from 'rxjs';
import config from '../../config.json';

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
}
