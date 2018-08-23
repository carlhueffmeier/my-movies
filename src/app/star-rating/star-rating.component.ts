import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input()
  rating: number;
  getStarType(starNumber): string {
    const rating = this.rating / 2;
    if (rating - starNumber >= 0) {
      return 'star-full';
    }
    if (rating - starNumber >= -0.5) {
      return 'star-half';
    }
    return 'star-empty';
  }
}
