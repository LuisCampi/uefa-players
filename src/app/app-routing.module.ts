import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { MainComponentComponent } from './main/main-component/main-component.component';
import { PlayerCardComponent } from './player-card/player-card/player-card.component';
import { StatisticsPanelComponent } from './statistics/statistics-panel/statistics-panel.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponentComponent },
  { path: 'player-panel/:liga', component: PlayerPanelComponent },
  { path: 'player-card', component: PlayerCardComponent },
  { path: 'estadistica/:liga', component: StatisticsPanelComponent },
  { path: ' ', redirectTo: 'inicio', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
