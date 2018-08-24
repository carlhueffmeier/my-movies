import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { ApiClientService } from './api-client.service';
import { Movie } from '../_types/movie';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySource = new Subject<string>();
  searchQuery$: Observable<string> = this.searchQuerySource.asObservable();
  searchResults$: Observable<Movie[]> = this.searchQuerySource.pipe(
    debounceTime(100),
    filter(Boolean),
    switchMap(query => this.apiClientService.getSearchResults(query))
  );

  constructor(private apiClientService: ApiClientService) {}

  updateSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
