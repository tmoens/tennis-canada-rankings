import { Component, OnInit } from '@angular/core';
import {KeyedStaticCollection} from "../keyed-static-collection";
import {AppState} from "../app-state";
import {Province} from "../province";
import {PROVINCES} from "../../assets/provinces/province-data";

@Component({
  selector: 'app-province-selector',
  templateUrl: './province-selector.component.html',
  styleUrls: ['./province-selector.component.css']
})
export class ProvinceSelectorComponent implements OnInit {
  provinces:KeyedStaticCollection<Province>;


  constructor(public appState: AppState) {
    this.provinces = PROVINCES;
  }

  ngOnInit() {
  }

  onSelectProvince(key:string) {
    this.appState.selectProvince(this.provinces.getItem(key));
  }
}


