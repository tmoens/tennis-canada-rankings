import {Component, Input, OnInit} from '@angular/core';
import {AppState} from '../../utils/app-state';
import {RankingGroup} from "../../utils/ranking-group";

@Component({
  selector: 'app-splash-image-selector',
  templateUrl: './splash-image-selector.component.html',
  styleUrls: ['./splash-image-selector.component.css']
})
export class SplashImageSelectorComponent implements OnInit {

  @Input() rankingGroup: RankingGroup;
  @Input() size: string;
  language: string;
  imagePath: string;

  constructor(public appState: AppState) {
  }

  // Watch for language changes to change any image with embedded text
  ngOnInit() {
    this.appState.selectedLanguage$.subscribe(l => {
        this.language = l.prefix;
        this.imagePath = this.getImagePath(this.rankingGroup.name, this.language);
      }
    );
  }

  ngOnChange() {
  }


  getImagePath(imageName: string, lang: string) {
    if (this.size === 'small') {
      return 'assets/images/Splash/' + lang + '/' + imageName + 'sm.jpg';
    } else {
      return 'assets/images/Splash/' + lang + '/' + imageName + '.jpg';
    }
  }
}
