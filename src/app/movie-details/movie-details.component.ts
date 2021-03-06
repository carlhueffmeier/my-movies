import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../_services/api-client.service';
import { MovieDetails } from '../_types/movieDetails';
import { getImgUri } from '../_helper/utils';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService
  ) {}

  isLoading() {
    return !this.movie;
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiClient.getMovieDetails(id).subscribe(data => {
      this.movie = { ...data };
    });
  }

  getProductionCompanies(): string {
    return this.movie.production_companies
      .map(company => company.name)
      .join(', ');
  }

  getGenres(): string {
    return this.movie.genres.map(genre => genre.name).join(', ');
  }

  getPosterUri() {
    return getImgUri(this.movie.poster_path);
  }

  ngOnInit() {
    this.getMovie();
  }
}
