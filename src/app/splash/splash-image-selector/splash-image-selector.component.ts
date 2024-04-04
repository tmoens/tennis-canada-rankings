import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../utils/app-state';
import {RankingGroup} from '../../utils/ranking-group';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-splash-image-selector',
  templateUrl: './splash-image-selector.component.html',
  styleUrls: ['./splash-image-selector.component.scss']
})
export class SplashImageSelectorComponent implements OnInit, OnDestroy {

  @Input() rankingGroup: RankingGroup;
  @Input() size: string;
  language: string;
  imagePath: string;

  // The subscription to the year change and province change events
  languageChangeSubscription: Subscription;

  constructor(public appState: AppState) {
  }


  // Watch for language changes to change any image with embedded text
  ngOnInit() {
    console.log('Initializing splash image selector');
    this.languageChangeSubscription = this.appState.selectedLanguage$.subscribe(l => {
        console.log('noting language change in splash image selector');
        this.language = l.prefix;
        this.imagePath = this.getImagePath(this.rankingGroup.name, this.language);
      }
    );
  }

  ngOnDestroy() {
    console.log('Destroying splash image selector');
    this.languageChangeSubscription.unsubscribe();
  }


  getImagePath(imageName: string, lang: string) {
    if (this.size === 'small') {
      return 'assets/images/Splash/' + lang + '/' + imageName + 'sm.jpg';
    } else {
      return 'assets/images/Splash/' + lang + '/' + imageName + '.jpg';
    }
  }
}
