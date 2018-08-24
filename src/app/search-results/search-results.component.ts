import { Component, Input } from '@angular/core';
import { Movie } from '../_types/movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input()
  searchResults: Movie[];

  isLoading() {
    return !this.searchResults;
  }
}
