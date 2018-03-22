import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {EventGroup} from "../ranking-event";

@Component({
  selector: 'event-structure-dialog',
  templateUrl: './event-structure.component.html',
  styleUrls: ['./event-structure.component.scss']
})
export class EventStructureDialog implements OnInit {

  eventGroup: EventGroup

  constructor(public dialogRef:MatDialogRef<EventStructureDialog>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.eventGroup = data.eventGroup as EventGroup
  }

  ngOnInit() {
  }
}
