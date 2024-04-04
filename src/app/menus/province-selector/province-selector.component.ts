import { Component, OnInit } from '@angular/core';
import {KeyedStaticCollection} from '../../utils/keyed-static-collection';
import {AppState} from '../../utils/app-state';
import {Province} from '../../utils/province';
import {PROVINCES} from '../../../assets/provinces/province-data';

@Component({
  selector: 'app-province-selector',
  templateUrl: './province-selector.component.html',
  styleUrls: ['./province-selector.component.scss']
})
export class ProvinceSelectorComponent implements OnInit {
  provinces: KeyedStaticCollection<Province>;


  constructor(public appState: AppState) {
    this.provinces = PROVINCES;
  }

  ngOnInit() {
  }

  onSelectProvince(key: string) {
    this.appState.selectProvince(this.provinces.getItem(key));
  }
}


