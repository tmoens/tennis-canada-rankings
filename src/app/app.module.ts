import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

// Service for access to application state and data.
import {AppState} from './utils/app-state';
import {FinishPositionLabeler} from './utils/finish-positions';
import {RankingYears} from './utils/ranking-years';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {EventStructureDialogComponent} from './dialogs/event-structure-dialog/event-structure.component';
import {ConceptDisplayComponent} from './rankings-explained/concept-display/concept-display.component';
import {PointsTableComponent} from './phone-event-selector/phone-points-table/points-table.component';
import {RankingsExplainedComponent} from './rankings-explained/rankings-explained.component';
import {RankingsLinkMenuComponent} from './menus/rankings-link-menu/rankings-link-menu.component';
import {ReadMoreDialogComponent} from './dialogs/read-more-dialog/read-more-dialog.component';
import {ProvinceSelectorComponent} from './menus/province-selector/province-selector.component';
import {RankingYearSelectorComponent} from './menus/ranking-year-selector/ranking-year-selector.component';
import {SplashComponent} from './splash/splash.component';
import {SplashImageSelectorComponent} from './splash/splash-image-selector/splash-image-selector.component';
import {EventSelectorComponent} from './phone-event-selector/event-selector.component';
import {OpenEventListComponent} from './rankings-explained/open-event-list/open-event-list.component';
import {AdultPtComponent} from './lg-points-tables/adult-pt/adult-pt.component';
import {WheelchairPtComponent} from './lg-points-tables/wheelchair-pt/wheelchair-pt.component';
import {SeniorPtComponent} from './lg-points-tables/senior-pt/senior-pt.component';
import {JuniorPtComponent} from './lg-points-tables/junior-pt/junior-pt.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/general/', suffix: '.json'},
    {prefix: './assets/i18n/junior/', suffix: '.json'},
    {prefix: './assets/i18n/junior/InternationalEvents/', suffix: '.json'},
    {prefix: './assets/i18n/junior/DomesticEvents/', suffix: '.json'},
    {prefix: './assets/i18n/junior/ProEvents/', suffix: '.json'},
    {prefix: './assets/i18n/adult/', suffix: '.json'},
    {prefix: './assets/i18n/open/', suffix: '.json'},
    {prefix: './assets/i18n/senior/', suffix: '.json'},
    {prefix: './assets/i18n/wheelchair/', suffix: '.json'},
    {prefix: './assets/i18n/categories/', suffix: '.json'}
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    ConceptDisplayComponent,
    EventSelectorComponent,
    EventStructureDialogComponent,
    OpenEventListComponent,
    PointsTableComponent,
    ProvinceSelectorComponent,
    RankingsExplainedComponent,
    RankingsLinkMenuComponent,
    ReadMoreDialogComponent,
    RankingYearSelectorComponent,
    SplashComponent,
    SplashImageSelectorComponent,
    AdultPtComponent,
    WheelchairPtComponent,
    SeniorPtComponent,
    JuniorPtComponent,
  ],
  imports: [
    A11yModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
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
    EventStructureDialogComponent,
    ReadMoreDialogComponent,
  ],
  providers: [
    AppState,
    FinishPositionLabeler,
    RankingYears,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

