import { Component, OnInit, OnChanges} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { RankingGroup} from "../ranking-group";
import { RankingConceptGroup } from "../ranking-concepts";
import { AppState} from "../app-state";
import { EventGroup } from "../ranking-event";
import {PROVINCES} from "../../assets/provinces/province-data";
import {Province} from "../province";
import {RANKING_GROUPS} from "../../assets/ranking-groups";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rankings-explained',
  templateUrl: './rankings-explained.component.html',
  styleUrls: ['./rankings-explained.component.scss']
})
export class RankingsExplainedComponent implements OnChanges, OnInit {
  debug:number;
  // This is the ranking group (i.e. junior/senior/open/adult/wheelchair)
  // that is being "explained" right now.
  rankingGroup: RankingGroup;
  canada: Province;

  // The app allows the user to look at rankings history.
  // This is a local rememory of the selected ranking year
  rankingYear: string;


  // The concept groups for the selected ranking group
  // are presented as tabs (on the right) in the order of the
  // concept groups within the ranking group.
  // So the n'th tab corresponds to the n'th concept group.
  // Track which tab is selected.
  rankingConceptGroup: RankingConceptGroup;
  selectedConceptIndex = 0;

  // // The event groups for the selected ranking group
  // // are presented as tabs (on the left) in the order of
  // // event groups for the ranking group.
  // // In practice, only the juniors have multiple event groups.
  // selectedEventGroupIndex = 0;
  // eventGroup: EventGroup;

  constructor(public appState: AppState,
              private route: ActivatedRoute) {
    this.canada = PROVINCES.getItem("_CAN_");
    this.debug = Math.random();
    // Watch for the ranking year to change and act accordingly.
    this.appState.selectedRankingYear$.subscribe(y => {
      this.rankingYear = y;
      // this.loadEventGroup();
      this.loadConceptGroup();
    });
    this.route.params.subscribe(params => {
        console.log(this.debug + " params: " + params);

        if (params.rankingGroupName) {
          this.rankingGroup = RANKING_GROUPS.getItem(params.rankingGroupName);
        } else {
          this.rankingGroup = RANKING_GROUPS.getFirst();
        }
        this.appState.selectRankingGroup(this.rankingGroup);
        this.ngOnChanges();
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.selectedEventGroupIndex = 0;
    // this.loadEventGroup();
    this.selectedConceptIndex = 0;
    this.loadConceptGroup();
  }

  // When the user selects a different "concept" tab look up the
  // corresponding rankingConceptGroup
  onConceptGroupChange(e: MatTabChangeEvent) {
    if (e.index !== this.selectedConceptIndex) {
      this.selectedConceptIndex = e.index;
      this.loadConceptGroup();
    }
  }

  // // When the user chooses a different event group we need
  // // to load the corresponding data.
  // onEventGroupChange(e: MatTabChangeEvent) {
  //   if (e.index !== this.selectedEventGroupIndex) {
  //     this.selectedEventGroupIndex = e.index;
  //     this.loadEventGroup();
  //     this.loadConceptGroup();
  //   }
  // }

  // loadEventGroup() {
  //   if (this.rankingGroup) {
  //     this.eventGroup =
  //       this.rankingGroup.eventGroups[this.selectedEventGroupIndex].getVersion(this.appState.selectedRankingYear);
  //   }
  // }

  loadConceptGroup() {
    if (this.rankingGroup) {
      this.rankingConceptGroup = this.rankingGroup.conceptGroups[this.selectedConceptIndex];
    }
  }
}
