import {Component, OnInit} from '@angular/core';
import {AppState} from "../app-state";
import {EventGroup} from "../ranking-event";
import {RankingGroup} from "../ranking-group";
import {Province} from "../province";
import {AgeGroup} from "../age-group";
import { JUNIOR_AGE_GROUPS } from "../../assets/age-groups";
import {PROVINCES} from "../../assets/provinces/province-data";

@Component({
  selector: 'app-event-selector',
  templateUrl: './event-selector.component.html',
  styleUrls: ['./event-selector.component.css']
})
export class EventSelectorComponent implements OnInit {
  // The currently selected ranking group - possibly should be an Input
  rankingGroup: RankingGroup;

  // The event groups in this ranking group
  eventGroups: EventGroup[];
  selectedEventGroup: EventGroup;

  // the sub-groups of the selected event
  eventSubGroups: EventGroup[];
  selectedEventSubGroup: EventGroup;

  // the selected province (kept i synch with global state.
  province: Province;

  // The selected ranking year, again from global state
  year: string;

  // a convenience variable for when we are dealing with
  // this special event group.
  isJuniorRegional:boolean;


  juniorAgeGroups: AgeGroup[];
  selectedAgeGroup: AgeGroup;

  regionalRF: number;
  ageGroupGenderRF: number;

  // The event group to be shown on the points table.
  pointTableEG: EventGroup;

  constructor(public appState: AppState) {
    // Watch for changes to the the selected ranking group or ranking year or selected Province
    this.appState.selectedRankingYear$.subscribe(y => {
      this.year = y;
      this.ngOnChanges();
    });
    this.appState.selectedRankingGroup$.subscribe(rg => {
      this.rankingGroup = rg;
      this.ngOnChanges();
    });
    this.appState.selectedProvince$.subscribe(p => {
      this.onProvinceChange(p);
    });
    this.juniorAgeGroups = JUNIOR_AGE_GROUPS;
    this.selectedAgeGroup = this.juniorAgeGroups[0];
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.rankingGroup) {
      // every ranking group has a KeyedStaticCollection of EventGroups
      // convert them to an array of event groups that are correct for the
      // selected ranking year. Then select the first one.
      this.eventGroups = this.rankingGroup.eventGroups.map(eg =>
        eg.getVersion(this.year));
      this.onSelectEventGroup(this.eventGroups[0]);
    }

  }

  onSelectEventGroup(eg:EventGroup) {
    this.selectedEventGroup = eg;
    this.regionalRF = 1;
    this.ageGroupGenderRF = 1;

    this.isJuniorRegional =  (eg.name == "_jr_regional_eg_");
    // some event groups have KeyedStaticCollection of sub EventGroups
    // if so, make an array of the appropriate version of each and select the first
    if (this.selectedEventGroup.hasSubGroups()) {
      this.eventSubGroups = this.selectedEventGroup.subGroups.map( eg =>
        eg.getVersion(this.year));
      if (!this.isJuniorRegional) {
        this.onSelectEventSubGroup(this.eventSubGroups[0]);
      } else {
        // this is a little obtuse, but it auto-selects the subgroup
        // that corresponds to the app's selected province.
        // It also requires a conventional correspondence between the name fields in the data.
        this.onSelectEventSubGroup(this.eventSubGroups.find(eg => {
          return eg.name == this.appState.selectedProvince.name;
        }));
        this.onSelectAgeGroup(this.juniorAgeGroups[0]);
      }
    } else {
      this.eventSubGroups = [];
      this.selectedEventSubGroup = null;
      this.pointTableEG = this.selectedEventGroup;
    }
  }

  onSelectEventSubGroup(esg:EventGroup) {
    this.selectedEventSubGroup = esg;
    this.pointTableEG = this.selectedEventSubGroup;
    if (this.isJuniorRegional) {
      this.province = PROVINCES.getItem(esg.name);
      if (this.selectedAgeGroup.gender == "M"){
        this.regionalRF = this.province.boysRating.getRating(this.year);
      } else {
        this.regionalRF = this.province.girlsRating.getRating(this.year);
      }
    }
  }

  onProvinceChange(p:Province){
    this.province = p;
    if (this.isJuniorRegional) {
      // this is a little obtuse, but it auto-selects the subgroup
      // that corresponds to the app's selected province.
      // It also requires a conventional correspondence between the name fields in the data.
      this.onSelectEventSubGroup(this.eventSubGroups.find(eg => {
        return eg.name == this.appState.selectedProvince.name;
      }));
      this.onSelectAgeGroup(this.juniorAgeGroups[0]);
    }

  }
  onSelectAgeGroup(ag:AgeGroup){
    this.selectedAgeGroup = ag;
    this.ageGroupGenderRF = this.selectedAgeGroup.rating.getRating(this.year);
  }
}
