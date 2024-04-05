import {Component, OnInit, Inject} from '@angular/core';
import {EventGroup} from '../../utils/ranking-event';
import {Province} from '../../utils/province';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

// import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-event-structure-dialog',
  templateUrl: './event-structure.component.html',
  styleUrls: ['./event-structure.component.scss']
})
export class EventStructureDialogComponent {
  hasLink = false;
  eventGroup: EventGroup;
  province: Province;
  year: string;

  constructor(
    public dialogRef: MatDialogRef<EventStructureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.eventGroup = data.eventGroup as EventGroup;
    this.province = data.province as Province;
    this.year = data.year;
  }
}
