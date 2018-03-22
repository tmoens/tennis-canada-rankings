import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {AppState} from "../app-state";
import {RankingConcept} from "../ranking-concept";
import {RankingConcepts} from "../ranking-concepts";

@Component({
  selector: 'app-read-more-dialog',
  templateUrl: './read-more-dialog.component.html',
  styleUrls: ['./read-more-dialog.component.scss']
})
export class ReadMoreDialogComponent implements OnInit {
  parentConcept: RankingConcept;

  constructor(public appState: AppState,
              public rankingConcepts: RankingConcepts,
              public dialogRef:MatDialogRef<ReadMoreDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.parentConcept = data.rankingConcept as RankingConcept;
  }
  ngOnInit() {
  }
}
