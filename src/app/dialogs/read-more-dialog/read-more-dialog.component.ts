import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppState} from '../../utils/app-state';
import {ConceptGroup} from '../../utils/conceptGroup';

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
