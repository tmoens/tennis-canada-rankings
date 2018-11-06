import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingsExplainedComponent } from "./rankings-explained/rankings-explained.component";
import {SplashComponent} from "./splash/splash.component";
import {RankingHistoryComponent} from "./history/ranking-history/ranking-history.component";

const routes: Routes = [
  { path: 'rankings/history', component: RankingHistoryComponent },
  { path: 'rankings/:rankingGroupName', component: RankingsExplainedComponent },
  { path: 'rankings', component: RankingsExplainedComponent },
  { path: 'home', component: SplashComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
