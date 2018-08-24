import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySource = new Subject<string>();
  searchQuery$: Observable<string> = this.searchQuerySource.asObservable();

  updateSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
