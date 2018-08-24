import { Component } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  private visible: boolean;

  constructor(private searchService: SearchService) {}

  toggleVisible(to = !this.visible) {
    this.visible = to;
  }

  handleQueryChange(newValue) {
    this.searchService.updateSearchQuery(newValue);
  }
}
