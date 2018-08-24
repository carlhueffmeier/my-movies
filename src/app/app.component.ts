import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchService } from './_services/search.service';
import { Movie } from './_types/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchResults: Movie[];
  isSearching: boolean;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.searchResults$.subscribe(data => {
      this.searchResults = [...data];
    });
    this.searchService.searchQuery$
      .pipe(map(Boolean))
      .subscribe(queryNotEmpty => {
        this.isSearching = queryNotEmpty;
      });
  }
}
