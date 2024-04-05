import {Component, OnInit, Input, OnDestroy, OnChanges} from '@angular/core';
// import {MatLegacyDialog as MatDialog} from '@angular/material/legacy-dialog';
import {ReadMoreDialogComponent} from '../../dialogs/read-more-dialog/read-more-dialog.component';
import {AppState} from '../../utils/app-state';
import {Concept} from '../../utils/concept';
import {Subscription} from 'rxjs';
import {ConceptGroup} from '../../utils/conceptGroup';
import {MatDialog} from '@angular/material/dialog';

/*
  This component displays a set of rankings concepts. That is text describing
  some aspect of the ranking system.  For example Key Concepts of Adult rankings,
  or Rationale for juniors including 5 tournament results in their ranking.

  This can happen in several places, so the code is factored out to here.

  2018-10-24 things change from year to year - so when a person looks at 2014
  rankings - the text should show what was correct in 2014.
*/
@Component({
  selector: 'app-concept-display',
  templateUrl: './concept-display.component.html',
  styleUrls: ['./concept-display.component.scss']
})
export class ConceptDisplayComponent implements OnInit, OnDestroy, OnChanges {

  // These two variables are essentially the query criteria to fetch
  // the set of concepts to be displayed.
  @Input() conceptGroup: ConceptGroup;

  // these are the fetched concepts
  concepts: Concept[];

  // The subscription to the year change and province change events
  yearChangeSubscription: Subscription;

  constructor(public appState: AppState,
              public readMore: MatDialog) {
  }

  ngOnInit() {
    // Watch for changes to the selected or ranking year in which case
    // we reset the concepts that are valid for the selected year.
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe(_ => {
      this.ngOnChanges();
    });
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.concepts = this.conceptGroup.getValidConcepts(parseInt(this.appState.selectedRankingYear, 10));
  }

  onReadMore(concept: Concept) {
    this.readMore.open(ReadMoreDialogComponent, {
      width: '600px',
      data: {conceptGroup: concept.expansionGroup},
    });
  }
}
