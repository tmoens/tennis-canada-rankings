/*
 This is a list of Open events and their ratings.
 It is a "special" bit because it only appears on the
 rankings-explained page for Open ranking area.
 */
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppState} from "../../utils/app-state";
import {HttpClient} from "@angular/common/http";
import {FetchService} from "../../fetch-service";
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {OpenTournamentDto} from './tournament-dto';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-open-event-list',
  templateUrl: './open-event-list.component.html',
  styleUrls: ['./open-event-list.component.css']
})
export class OpenEventListComponent implements OnInit, AfterViewInit, OnDestroy {
  year: number;
  tournaments: OpenTournamentDto[] = [];
  tableData = new MatTableDataSource(this.tournaments);
  columnsToDisplay: string[] = ['province', 'name', 'mrating', 'frating'];

  // This plucks a reference to the matSort table from our HTML template
  @ViewChild(MatSort) sort: MatSort;

  constructor(public appState: AppState,
              public http: HttpClient,
              public fetchService: FetchService,) {
  }

  // The subscription to the year change events
  yearChangeSubscription: Subscription;

  ngOnInit() {
    // Watch for changes to the selected ranking year
    // in which case we reset the event selector
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe(y => {
      this.fetchOpenTournaments(parseInt(y, 10));
    });
  }

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
  }

  // Load the Open tournament List
  fetchOpenTournaments(year:number) {
    this.year = year;
    this.fetchService.fetchOpenTournaments(year)
      .subscribe((tournaments: OpenTournamentDto[]) => {
        this.tournaments = tournaments;
        this.tableData.data = this.tournaments;
      })
  }

  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
}
