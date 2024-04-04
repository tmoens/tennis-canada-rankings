import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {RankingGroup} from '../../utils/ranking-group';
import {AppState} from '../../utils/app-state';
import {PROVINCES} from '../../../assets/provinces/province-data';
import {Province} from '../../utils/province';

@Component({
  selector: 'app-rankings-link-menu',
  templateUrl: './rankings-link-menu.component.html',
  styleUrls: ['./rankings-link-menu.component.scss'],

  // This next line was necessary to be able to widen mat-menus via .scss
  encapsulation: ViewEncapsulation.None,
})
export class RankingsLinkMenuComponent implements OnInit {
  @Input() rankingGroup: RankingGroup;
  canada: Province;
  cols = 4;

  constructor(public appState: AppState) {
    this.canada = PROVINCES.getItem('_CAN_');
  }

  ngOnInit() {
    // Rankings list menus generally have 4 columns (MS, FS, MD, FD)
    this.cols = 4;

    // Wheelchair only has three.
    if (this.rankingGroup.name === '_Wheelchair_') {
      this.cols = 3;
    }

    // As of Jan 2024, Adult category names are much wider due to the introduction of WTN wording,
    // so only two columns per row.
    if (this.rankingGroup.name === '_Adult_') {
      this.cols = 2;
    }
  }

}
