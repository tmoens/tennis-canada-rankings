import {Component, Input, OnInit} from '@angular/core';
import {AppState} from '../../utils/app-state';

@Component({
  selector: 'app-splash-image-selector',
  templateUrl: './splash-image-selector.component.html',
  styleUrls: ['./splash-image-selector.component.css']
})
export class SplashImageSelectorComponent implements OnInit {

  @Input() rankingGroupName: string;
  language: string;
  imagePath: string;

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    this.appState.selectedLanguage$.subscribe(l => {
        this.language = l.prefix;
        this.imagePath = this.getImagePath(this.rankingGroupName, this.language);
      }
    );
  }

  ngOnChange() {
  }

  getImagePath(imageName: string, lang: string) {
    return 'assets/images/Splash/' + lang + '/' + imageName + '.jpg';
  }
}
