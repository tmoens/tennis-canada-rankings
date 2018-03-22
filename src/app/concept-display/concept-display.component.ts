import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RankingConcepts } from "../ranking-concepts";
import { RankingConcept } from "../ranking-concept";
import { MatDialog } from "@angular/material";
import { ReadMoreDialogComponent } from "../read-more-dialog/read-more-dialog.component";
/*
  This component displays a set of rankings concepts. That is text describing
  some aspect of the ranking system.  For example Key Concepts of Adult rankings,
  or Rationale for juniors including 5 tournament results in their ranking.

  This can happen in several places, so the code is factored out to here.
*/
@Component({
  selector: 'app-concept-display',
  templateUrl: './concept-display.component.html',
  styleUrls: ['./concept-display.component.css']
})
export class ConceptDisplayComponent implements OnInit {

  // These two variables are essentially the query criteria to fetch
  // the set of concepts to be displayed.
  @Input() conceptGroupName:string;
  @Input() rankingGroupName:string;

  // these are the fetched concepts
  concepts: RankingConcept[];

  constructor(public rankingConcepts: RankingConcepts,
              public readMore:MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.concepts = this.rankingConcepts.getConceptsByName(this.rankingGroupName, this.conceptGroupName);
  }

  onReadMore(concept:RankingConcept) {
    this.readMore.open(ReadMoreDialogComponent, {
      width: '600px',
      data: { rankingConcept: concept } ,
    })
  }
}
