import { Component } from '@angular/core';
import { ApiClientService } from './_services/api-client.service';
import { Movie } from './_types/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private query: string = '';
  searchResults: Movie[];

  constructor(private apiClient: ApiClientService) {}

  handleSearchQueryChange(newValue) {
    this.query = newValue;
    if (this.query) {
      this.fetchSearchResults();
    } else {
      this.searchResults = [];
    }
  }

  fetchSearchResults() {
    this.apiClient.getSearchResults(this.query).subscribe(data => {
      this.searchResults = [...data];
      console.log(this.searchResults);
    });
  }

  isSearching() {
    return this.query;
  }
}
