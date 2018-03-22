import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';


import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material";
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';

import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { MultiTranslateHttpLoader} from './multi-translate-http-loader';

// Service for access to application state and data.
import { AppState } from "./app-state";
import { FinishPositionLabeler } from "./finish-positions";
import { RankingConcepts} from "./ranking-concepts";
import { RankingYears } from './ranking-years';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EventStructureDialog } from './event-structure-dialog/event-structure.component';
import { ConceptDisplayComponent } from './concept-display/concept-display.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { RankingsExplainedComponent } from './rankings-explained/rankings-explained.component';
import { RankingsLinkMenuComponent } from './rankings-link-menu/rankings-link-menu.component';
import { ReadMoreDialogComponent } from './read-more-dialog/read-more-dialog.component';
import { StateViewerComponent } from './state-viewer/state-viewer.component';
import { ProvinceSelectorComponent } from './province-selector/province-selector.component';
import { RankingYearSelectorComponent } from './ranking-year-selector/ranking-year-selector.component';
import { SplashComponent } from './splash/splash.component';
import { SplashImageSelectorComponent } from './splash-image-selector/splash-image-selector.component';
import { EventSelectorComponent } from './event-selector/event-selector.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/general/', suffix: '.json'},
    {prefix: './assets/i18n/junior/', suffix: '.json'},
    {prefix: './assets/i18n/adult/', suffix: '.json'},
    {prefix: './assets/i18n/wheelchair/', suffix: '.json'}
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    ConceptDisplayComponent,
    EventStructureDialog,
    PointsTableComponent,
    RankingsExplainedComponent,
    RankingsLinkMenuComponent,
    ReadMoreDialogComponent,
    StateViewerComponent,
    ProvinceSelectorComponent,
    RankingYearSelectorComponent,
    SplashComponent,
    SplashImageSelectorComponent,
    EventSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  entryComponents: [
    EventStructureDialog,
    ReadMoreDialogComponent,
  ],
  providers: [
    AppState,
    FinishPositionLabeler,
    RankingConcepts,
    RankingYears,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
