import { Component } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  private visible: boolean;
  query: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  toggleVisible(to = !this.visible) {
    this.visible = to;
  }

  handleQueryChange(newValue) {
    if (newValue) {
      this.router.navigate(['/search'], { queryParams: { query: newValue } });
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.searchService.searchQuery$.subscribe(query => {
      this.query = query;
    });
  }
}
