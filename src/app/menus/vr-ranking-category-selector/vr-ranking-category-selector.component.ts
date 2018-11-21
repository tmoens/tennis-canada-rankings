import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  OPEN_RANKING_CATEGORIES,
  WHEELCHAIR_RANKING_CATEGORIES,
  JR_CATEGORY_HIERARCHY,
  ADULT_CATEGORY_HIERARCHY,
  SR_CATEGORY_HIERARCHY,
} from "../../../assets/rankings-categories";
import {RankingCategory} from "../../utils/ranking-category";

@Component({
  selector: 'app-vr-ranking-category-selector',
  templateUrl: './vr-ranking-category-selector.component.html',
  styleUrls: ['./vr-ranking-category-selector.component.css']
})
export class VrRankingCategorySelectorComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<RankingCategory>();
  selectedRankingCategory: RankingCategory;
  allCategories: any[];
  constructor() { }

  ngOnInit() {
    this.allCategories= [
      {name: '_Junior_', groups: JR_CATEGORY_HIERARCHY},
      {name: '_Open_', groups: OPEN_RANKING_CATEGORIES},
      {name: '_Adult_', groups: ADULT_CATEGORY_HIERARCHY},
      {name: '_Senior_', groups: SR_CATEGORY_HIERARCHY},
      {name: '_Wheelchair_', groups: WHEELCHAIR_RANKING_CATEGORIES},
    ]
    this.selectedRankingCategory = OPEN_RANKING_CATEGORIES[0];
  }
  onCategorySelected(c: RankingCategory) {
    if (c == this.selectedRankingCategory) return;
    this.selectedRankingCategory = c;
    this.categorySelected.emit(c);
  }
}
