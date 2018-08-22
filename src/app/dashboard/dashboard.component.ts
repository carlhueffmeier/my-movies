import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';
import { Category } from '../category';

const PRESELECTED_CATEGORY_ID = 28;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  discoverMovies: Movie[];
  categoryMovies: Movie[];
  categories: Category[];
  selectedCategory: Category;

  constructor(private apiClient: ApiClientService) {}

  getMovies(): void {
    this.apiClient.getDiscoverMovies().subscribe((data: Movie[]) => {
      // 🎈 Is this necessary?
      this.discoverMovies = [...data];
    });
  }

  getCategories(): void {
    this.apiClient.getCategories().subscribe((data: Category[]) => {
      this.categories = [...data];
    });
  }

  selectCategory(categoryId): void {
    this.selectedCategory = categoryId;
    this.apiClient.getCategoryMovies(categoryId).subscribe((data: Movie[]) => {
      this.categoryMovies = [...data];
    });
  }

  ngOnInit() {
    this.getMovies();
    this.getCategories();
    this.selectCategory(PRESELECTED_CATEGORY_ID);
  }
}
