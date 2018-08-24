import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output()
  onChange = new EventEmitter();
  private visible: boolean;

  toggleVisible(to = !this.visible) {
    this.visible = to;
  }
}
