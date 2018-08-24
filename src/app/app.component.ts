import { Component, OnInit } from '@angular/core';
import { SearchService } from './_services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './_types/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchResults: Movie[];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params =>
      this.searchService.updateSearchQuery(params.get('query') || '')
    );
  }
}
