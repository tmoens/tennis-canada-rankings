import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {EventGroup} from "../ranking-event";
import {Province} from "../province";

@Component({
  selector: 'event-structure-dialog',
  templateUrl: './event-structure.component.html',
  styleUrls: ['./event-structure.component.scss']
})
export class EventStructureDialog implements OnInit {

  eventGroup: EventGroup;
  province: Province;
  year: string;

  constructor(public dialogRef:MatDialogRef<EventStructureDialog>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.eventGroup = data.eventGroup as EventGroup
    this.province = data.province as Province;
    this.year = data.year;
  }

  ngOnInit() {
  }
}
