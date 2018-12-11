/*
   This is a list of Open events and their ratings.
   It is a "special" bit because it only appears on the
   rankings-explained page for Open ranking area.
   It pulls data from a Google Sheet maintained by
   Arun and Ari.  When that sheet is update the
   lists change accordingly.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {AppState} from "../../utils/app-state";
import {HttpClient} from "@angular/common/http";
import {MatSort, MatTableDataSource} from "@angular/material";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {FetchService} from "../../fetch-service";

@Component({
  selector: 'app-open-event-list',
  templateUrl: './open-event-list.component.html',
  styleUrls: ['./open-event-list.component.css']
})
export class OpenEventListComponent implements OnInit {
  year: number;
  tournaments: OpenTournament[] = [];
  tableData = new MatTableDataSource(this.tournaments);
  columnsToDisplay: string[] = ['province', 'name', 'mrating', 'frating'];
  showList = true;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public appState: AppState,
              public http: HttpClient,
              public fetchService: FetchService,) {
  }

  ngOnInit() {
    // Watch for changes to the the selected ranking group or ranking year
    // in which case we reset the event selector
    this.appState.selectedRankingYear$.subscribe(y => {
      this.fetchOpenTournaments(parseInt(y, 10));
    });
    this.tableData.sort = this.sort;
  }

  ngOnChange() {
    this.appState.selectedRankingYear$.subscribe(y => {
      this.fetchOpenTournaments(parseInt(y, 10));
    });
  }


  // Load the Open tournament List
  // There is a workbook in google docs which supplies the list of all the Open tournaments in Canada.
  // It has one worksheet per year.
  // This function uses the fetchService to go and get the sheet for a given year as JSON object.
  // The JSON object is very bloated.
  // The meat of the spreadsheet is in the returned data.feed.entry
  // The fields are all the column names in lower case prefixed by gsx$
  // The column content is an object with a field named $t which contains the content as text.
  // The consumer of this object needs to know this structure.
  fetchOpenTournaments(year:number) {
    this.year = year;
    let tournaments: OpenTournament[] = [];
    this.fetchService.fetchOpenTournaments(year)
      .subscribe(data => {
        if (data) {
          const feed: any = data['feed'];
          // Take the returned JSON and stuff it in something more useful.
          for (const t of feed.entry) {
            const tournament: OpenTournament = new OpenTournament(
              t.title['$t'],
              t['gsx$prov']['$t'],
              (t['gsx$men']['$t'] && "-" !== t['gsx$men']['$t']) ? t['gsx$men']['$t'] : null,
              (t['gsx$women']['$t'] && "-" !== t['gsx$women']['$t']) ? t['gsx$women']['$t'] : null
            );
            tournaments.push(tournament);
            // console.log(JSON.stringify(tournament))
          }
          this.tableData.data = tournaments;
          this.showList = true;
        } else {
          this.tableData.data =[];
          this.showList = false;
        }
    })

  }

  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }

}

class OpenTournament {
  constructor( public name: string,
               public province: string,
               public mrating: string,
               public frating: string,) {
  }
}
