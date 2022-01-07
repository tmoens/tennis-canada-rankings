import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RankingGroup} from "../../utils/ranking-group";
import {EventGroup, RankingEvent} from "../../utils/ranking-event";
import {AppState} from "../../utils/app-state";
import {FinishPositionLabeler} from "../../utils/finish-positions";
import {arrayInsert} from "../../utils/arrayInsert";
import {Province} from "../../utils/province";
import {AgeGroup} from "../../age-group";
import {JUNIOR_AGE_GROUPS} from "../../../assets/age-groups";
import {MIN_JR_REGIONAL_DRAW_SIZE} from "../../../assets/event-groups/junior/junior-provincial-event-groups";
import {PROVINCES} from "../../../assets/provinces/province-data";
import {EventStructureDialog} from "../../dialogs/event-structure-dialog/event-structure.component";
import {ReadMoreDialogComponent} from "../../dialogs/read-more-dialog/read-more-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from 'rxjs';

const finishPositions: number[] = [1,2,3,4,8,16,32,64,128];
const r = .6;
const basePoints = 10000;

@Component({
  selector: 'app-junior-pt',
  templateUrl: './junior-pt.component.html',
  styleUrls: ['./junior-pt.component.css']
})
export class JuniorPtComponent implements OnInit, OnDestroy {
  @Input() rankingGroup: RankingGroup;
  // The event groups in this ranking group
  eventGroups: EventGroup[];
  selectedEventGroup: EventGroup;

  // the sub-groups of the selected event group
  eventSubGroups: EventGroup[];
  selectedEventSubGroup: EventGroup;

  // the events in the selected group or subgroup from which the user
  // can choose
  events: RankingEvent[];

  // the selected province, initially from global state.
  selectedProvince: Province;

  // The selected ranking year, from global state
  year: string;

  // a convenience variable for when we are dealing with
  // this special event group. Also, this group can have
  // a modified ratings if the draws are small.
  isJuniorRegional:boolean;
  smallDrawSize: any;
  smallDrawSizes: any[] = [];

  // a convenience variable for when we are dealing with
  // this special event group.
  isJuniorInternational: boolean;

  // available choices in for juniors
  juniorAgeGroups: AgeGroup[] = JUNIOR_AGE_GROUPS;
  selectedAgeGroup: AgeGroup;

  // The row on top of the points table
  headerRow: any[];
  // 2019-05-02 Against my will.
  // Alberta and BC have two header rows for their junior events.
  // One row for name, one for stars.
  hasSecondHeaderRow: boolean = false;
  secondHeaderRow: any[];

  headerColumn: any[];
  customFinishPosition: number = 13;
  pointsTable: any[];

  // The subscription to the year change and province change events
  yearChangeSubscription: Subscription;
  provinceChangeSubscription: Subscription;

  constructor(public appState: AppState,
              public eventStructureDialog: MatDialog,
              public readMoreDialog:MatDialog,
              public fpLabeler: FinishPositionLabeler,
  ) {
    this.smallDrawSizes.push({
      value: MIN_JR_REGIONAL_DRAW_SIZE,
      desc: "_or_more_players_"});
    this.smallDrawSize = this.smallDrawSizes[0];
    for (let i = MIN_JR_REGIONAL_DRAW_SIZE - 1; i > 1; i--) {
      this.smallDrawSizes.push({value: i, desc: "_players_",})
    }
  }

  ngOnInit() {
    // If the user changes rankings year at the top level we need to refresh.
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe(y => {
      this.onRankingsYearChange(y)
    });
    // If the user changes the selected province we may need
    // to make some changes as well.
    this.provinceChangeSubscription = this.appState.selectedProvince$.subscribe(p => {
      this.onProvinceChange(p);
    });
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
    this.provinceChangeSubscription.unsubscribe();
  }

  onRankingsYearChange(y) {
    if (this.year !== y) {
      this.year = y;
      this.eventGroups = this.rankingGroup.eventGroups.map(eg =>
        eg.getVersion(this.year));
      this.onSelectEventGroup(this.eventGroups[0]);
      this.buildPointsTable();
    }
  }

  // only junior regional events use a regional (provincial) rating
  onProvinceChange(p:Province){
    this.hasSecondHeaderRow = false;
    this.selectedProvince = p;
    if (this.isJuniorRegional) {
      // For the Junior Regional group there is one sub-group per PTA
      // So, we auto select the one that corresponds to the selected province.
      this.onSelectEventSubGroup(this.eventSubGroups.find(eg => {
        return eg.name == this.appState.selectedProvince.name;
      }));
      this.hasSecondHeaderRow = (p.abbrv === 'BC' || p.abbrv === 'AB');
    }
    this.buildPointsTable();
  }

  onSelectEventGroup(eg: EventGroup) {
    this.isJuniorRegional = false;
    this.isJuniorInternational = false;
    this.selectedEventGroup = eg;
    this.eventSubGroups = this.selectedEventGroup.subGroups.map( eg =>
      eg.getVersion(this.year));
    this.isJuniorRegional =  (eg.name == "_Domestic_Events_");
    if (this.isJuniorRegional) {
      // For the Junior Regional group there is one sub-group per PTA
      // So, we auto select the one that corresponds to the current context
      // of the app.  For example, if the user has selected Manitoba from
      // the Province menu, then we go get the Manitoba subgroup of events.
      this.onProvinceChange(this.appState.selectedProvince);
      this.onSelectAgeGroup(this.juniorAgeGroups[0]);
    } else {
      // otherwise, just select the first sub group
      this.onSelectEventSubGroup(this.eventSubGroups[0]);
    }
    this.isJuniorInternational =  (eg.name == "_jr_int_eg_");
  }

  onSelectEventSubGroup(esg: EventGroup) {
    this.hasSecondHeaderRow = false;
    if (this.isJuniorRegional) {
      this.selectedProvince = PROVINCES.getItem(esg.name)
      this.hasSecondHeaderRow = (this.selectedProvince.abbrv === 'BC' || this.selectedProvince.abbrv === 'AB');
    }
    this.selectedEventSubGroup = esg;
    this.events = esg.rankingEvents;
    this.buildPointsTable();
  }

  onSelectAgeGroup(ag:AgeGroup){
    this.selectedAgeGroup = ag;
    this.buildPointsTable();
  }

  onShowEventStructure(eg) {
    this.eventStructureDialog.open(EventStructureDialog, {
      width: '600px',
      data: {eventGroup: eg, province: this.selectedProvince, year: this.year}
    })
  }

  onReadMore() {
    if (this.selectedEventSubGroup.conceptGroup) {
      this.readMoreDialog.open(ReadMoreDialogComponent,
        {
          width: '600px',
          data: {conceptGroup: this.selectedEventSubGroup.conceptGroup}
        })
    }
  }

  buildPointsTable() {
    // Figure out the ratings for each ranking event in the selected SubGroup;
    let ratingsRow: number[] = this.buildRatingsRow();
    // Build a header row using the event names
    this.headerRow = this.buildHeaderRow();
    if (this.hasSecondHeaderRow) this.secondHeaderRow = this.buildSecondHeaderRow();
    this.headerColumn = [];
    let table = [];
    let fps: number[] = arrayInsert(finishPositions, this.customFinishPosition);
    if (this.smallDrawSize.value < MIN_JR_REGIONAL_DRAW_SIZE) {
      fps = arrayInsert(fps, this.smallDrawSize.value);
      this.customFinishPosition = this.smallDrawSize.value;
    }
    for (const fp of fps) {
      if (this.smallDrawSize.value < MIN_JR_REGIONAL_DRAW_SIZE && fp > this.smallDrawSize.value) break;
      this.headerColumn.push(this.fpLabeler.getLabel(fp));
      const row: any[] = [];
      let i = 0;
      for (const e of this.events) {
        if (fp === this.customFinishPosition) {
          row.push({value: this.calcPoints(fp, ratingsRow[i]), special: true});
        } else {
          row.push({value: this.calcPoints(fp, ratingsRow[i])});
        }
        i++;
      }
      table.push(row);
    }
    this.pointsTable = table;
  }

  buildHeaderRow(): string[] {
    const row = [];
    for (const  e of this.selectedEventSubGroup.rankingEvents) {
      row.push( e.name + 'abbrv_');
    }
    return row;
  }

  buildSecondHeaderRow(): string[] {
    const row = [];
    for (const  e of this.selectedEventSubGroup.rankingEvents) {
      row.push( e.name + 'stars_');
    }
    return row;
  }

  buildRatingsRow(): number[] {
    const row = [];
    for (const  e of this.selectedEventSubGroup.rankingEvents) {
      // Find the base rating of the event.
      let rating:number = e.rating.getRating(this.year);
      // In the case of domestic event, adjust the rating for age, gender and province.
      if (this.isJuniorRegional) {
        if (this.selectedAgeGroup) {
          rating = rating * this.selectedAgeGroup.rating.getRating(this.year);
          if (this.selectedAgeGroup.gender == "M") {
            rating = rating * this.selectedProvince.boysRating.getRating(this.year);
          } else {
            rating = rating * this.selectedProvince.girlsRating.getRating(this.year);
          }
          if (this.smallDrawSize.value < MIN_JR_REGIONAL_DRAW_SIZE) {
            rating = rating * this.smallDrawSize.value / MIN_JR_REGIONAL_DRAW_SIZE;
          }
        }
      }
      row.push(rating);
    }
    return row;

  }

  calcPoints( fp: number,  rating: number) {
    return basePoints * rating * Math.pow(r, Math.log2(fp));
  }
}
