import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../_types/category';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent {
  @Input()
  categories: Category[];
  @Input()
  selected: Category;
  @Output()
  onChange = new EventEmitter<Category>();
}
