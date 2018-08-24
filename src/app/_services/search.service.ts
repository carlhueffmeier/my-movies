import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private latestSearchQuery = '';
  private searchQuerySource = new Subject<string>();
  searchQuery$: Observable<string> = this.searchQuerySource.asObservable();

  updateSearchQuery(query: string) {
    this.searchQuerySource.next(query);
    this.latestSearchQuery = query;
  }

  getLatest() {
    return this.latestSearchQuery;
  }
}
