import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingsExplainedComponent } from "./rankings-explained/rankings-explained.component";
import {SplashComponent} from "./splash/splash.component";

const routes: Routes = [
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
