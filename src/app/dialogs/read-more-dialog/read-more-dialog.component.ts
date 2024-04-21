import {Component, OnInit, Inject} from '@angular/core';
// import {MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';
import {AppState} from '../../utils/app-state';

import {ConceptGroup} from '../../utils/conceptGroup';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-read-more-dialog',
  templateUrl: './read-more-dialog.component.html',
  styleUrls: ['./read-more-dialog.component.scss']
})
export class ReadMoreDialogComponent implements OnInit {
  conceptGroup: ConceptGroup;

  constructor(public appState: AppState,
              public dialogRef: MatDialogRef<ReadMoreDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.conceptGroup = data.conceptGroup as ConceptGroup;
  }

  ngOnInit() {
  }
}
