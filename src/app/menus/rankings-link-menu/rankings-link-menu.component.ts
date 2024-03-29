import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RankingGroup } from '../../utils/ranking-group';
import { AppState} from '../../utils/app-state';
import { PROVINCES } from '../../../assets/provinces/province-data';
import {Province} from '../../utils/province';

/**
 * 2018-02-28 Ted Moens
 * Make the drop-down menus for a given ranking group
 */
@Component({
  selector: 'app-rankings-link-menu',
  templateUrl: './rankings-link-menu.component.html',
  styleUrls: ['./rankings-link-menu.component.css'],

  // This next line was necessary to be able to widen mat-menus via .css
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
    // Wheelchair only has three.
    if (this.rankingGroup.name === '_Wheelchair_') {
      this.cols = 3;
    }

    // Rankings list menus generally have 4 columns (MS, FS, MD, FD)
    // Adult category names are too wide since introduction of WTN wording, so only two columns
    if (this.rankingGroup.name === '_Adult_') {
      this.cols = 2;
    }
  }

}
