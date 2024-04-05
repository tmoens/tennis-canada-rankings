import {Component, OnInit, OnChanges} from '@angular/core';
import {MatLegacyTabChangeEvent as MatTabChangeEvent} from '@angular/material/legacy-tabs';
import {RankingGroup} from '../utils/ranking-group';
import {AppState} from '../utils/app-state';
import {PROVINCES} from '../../assets/provinces/province-data';
import {Province} from '../utils/province';
import {RANKING_GROUPS} from '../../assets/ranking-groups';
import {ActivatedRoute} from '@angular/router';

import {ConceptGroup} from '../utils/conceptGroup';

@Component({
  selector: 'app-rankings-explained',
  templateUrl: './rankings-explained.component.html',
  styleUrls: ['./rankings-explained.component.scss']
})
export class RankingsExplainedComponent implements OnChanges, OnInit {
  // This is the ranking group (i.e. junior/senior/open/adult/wheelchair)
  // that is being "explained" right now.
  rankingGroup: RankingGroup;
  canada: Province;

  // special case for "open" where there is an extra tab for
  // open events
  showingOpenEvents = false;

  // The app allows the user to look at rankings history.
  // This is a local rememory of the selected ranking year
  rankingYear: string;


  // The concept groups for the selected ranking group are presented as tabs (on the right) in the order of the
  // concept groups within the ranking group. So the n'th tab corresponds to the n'th concept group.
  // Track which tab is selected.
  conceptGroup: ConceptGroup;
  selectedConceptIndex = 0;

  constructor(public appState: AppState,
              private route: ActivatedRoute) {
    this.canada = PROVINCES.getItem('_CAN_');

    // Watch for the ranking year to change and act accordingly.
    this.appState.selectedRankingYear$.subscribe(y => {
      this.rankingYear = y;
      this.loadConceptGroup();
    });
    this.route.params.subscribe(params => {
        if (params.rankingGroupName) {
          for (const rg of RANKING_GROUPS) {
            if (params.rankingGroupName === rg.name) {
              this.rankingGroup = rg;
            }
          }
        } else {
          this.rankingGroup = RANKING_GROUPS[0];
        }
        this.appState.selectRankingGroup(this.rankingGroup);
        this.ngOnChanges();
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectedConceptIndex = 0;
    this.loadConceptGroup();
  }

  // When the user selects a different "concept" tab look up the
  // corresponding rankingConceptGroup
  onConceptGroupChange(e: MatTabChangeEvent) {
    if (e.index !== this.selectedConceptIndex) {
      if (e.index === this.rankingGroup.conceptGroups.length) {
        this.showingOpenEvents = true;
      } else {
        this.showingOpenEvents = false;
        this.selectedConceptIndex = e.index;
        this.loadConceptGroup();
      }
    }
  }

  loadConceptGroup() {
    if (this.rankingGroup) {
      this.conceptGroup = this.rankingGroup.conceptGroups[this.selectedConceptIndex];
    }
  }
}
