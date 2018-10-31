import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RankingGroup } from '../../utils/ranking-group';
import { KeyedStaticCollection } from "../../utils/keyed-static-collection";
import { AppState} from "../../utils/app-state";
import { PROVINCES } from "../../../assets/provinces/province-data";
import {Province} from "../../utils/province";
import {RANKING_GROUPS} from "../../../assets/ranking-groups";

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

  constructor(public appState: AppState) {
    this.canada = PROVINCES.getItem("_CAN_");
  }

  ngOnInit() {
  }

}
