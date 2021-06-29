import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ReadMoreDialogComponent } from "../../dialogs/read-more-dialog/read-more-dialog.component";
import {AppState} from "../../utils/app-state";
import {Concept, ConceptGroup} from "../../utils/concept";
/*
  This component displays a set of rankings concepts. That is text describing
  some aspect of the ranking system.  For example Key Concepts of Adult rankings,
  or Rationale for juniors including 5 tournament results in their ranking.

  This can happen in several places, so the code is factored out to here.

  2018-10-24 things change from year to year - so when a person looks at 2014
  rankings - the text should show what was correct in 2014. Gonna try to make it work.
*/
@Component({
  selector: 'app-concept-display',
  templateUrl: './concept-display.component.html',
  styleUrls: ['./concept-display.component.css']
})
export class ConceptDisplayComponent implements OnInit {

  // These two variables are essentially the query criteria to fetch
  // the set of concepts to be displayed.
  @Input() conceptGroup: ConceptGroup;

  // these are the fetched concepts
  concepts: Concept[];

  constructor(public appState: AppState,
              public readMore: MatDialog) { }

  ngOnInit() {
    // Watch for changes to the the selected or ranking year in which case
    // we reset the concepts that are valid for the selected year.
    this.appState.selectedRankingYear$.subscribe(y => {
      this.ngOnChanges();
    });
  }

  ngOnChanges() {
    this.concepts = this.conceptGroup.getValidConcepts(parseInt(this.appState.selectedRankingYear,10));
  }

  onReadMore(concept:Concept) {
    this.readMore.open(ReadMoreDialogComponent, {
      width: '600px',
      data: { conceptGroup: concept.expansionGroup } ,
    })
  }
}
