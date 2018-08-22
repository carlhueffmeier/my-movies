import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { getImgUri } from '../helper/utils';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor() {}

  ngOnInit() {}

  getPosterUri() {
    return getImgUri(this.movie.poster_path);
  }
}
