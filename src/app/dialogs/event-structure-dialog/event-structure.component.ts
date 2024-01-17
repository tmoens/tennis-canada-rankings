import { Component, OnInit, Inject } from '@angular/core';
import {EventGroup} from '../../utils/ranking-event';
import {Province} from '../../utils/province';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'event-structure-dialog',
  templateUrl: './event-structure.component.html',
  styleUrls: ['./event-structure.component.scss']
})
export class EventStructureDialog implements OnInit {
  hasLink = false;
  eventGroup: EventGroup;
  province: Province;
  year: string;

  constructor(
    public dialogRef: MatDialogRef<EventStructureDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.eventGroup = data.eventGroup as EventGroup;
    this.province = data.province as Province;
    this.year = data.year;
  }

  ngOnInit() {
  }
}
