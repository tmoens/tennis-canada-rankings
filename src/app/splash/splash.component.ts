import { Component, OnInit } from '@angular/core';
import {AppState} from '../utils/app-state';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  lang: string;

  constructor(public appState: AppState, ) {
    this.appState.selectedLanguage$.subscribe( l => {
      this.lang = l.prefix;
      }
    );
  }

  ngOnInit() {
  }


}
