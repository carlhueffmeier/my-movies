import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, filter } from 'rxjs/operators';
import { Movie } from '../_types/movie';
import { SearchService } from '../_services/search.service';
import { ApiClientService } from '../_services/api-client.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Movie[];

  constructor(
    private searchService: SearchService,
    private apiClient: ApiClientService
  ) {}

  isLoading() {
    return !this.searchResults;
  }

  ngOnInit() {
    this.searchService.searchQuery$
      .pipe(
        debounceTime(100),
        filter(Boolean),
        switchMap(query => this.apiClient.getSearchResults(query))
      )
      .subscribe(data => {
        this.searchResults = [...data];
      });
  }
}
