import { Component, OnInit, OnChanges} from '@angular/core';
import { AppState} from "../app-state";
import { PROVINCES } from "../../assets/provinces/province-data";
import {Province} from "../province";
import {KeyedStaticCollection} from "../keyed-static-collection";

@Component({
  selector: 'app-state-viewer',
  templateUrl: './state-viewer.component.html',
  styleUrls: ['./state-viewer.component.css']
})
export class StateViewerComponent implements OnChanges, OnInit {
  provinces: KeyedStaticCollection<Province>;
  linkClicks: number = 3;
  constructor(public appState: AppState) {
    this.provinces = PROVINCES;
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  onLinkClick() {
    this.linkClicks++;
  }
}
