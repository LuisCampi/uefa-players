import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { MainComponentComponent } from './main/main-component/main-component.component';
import { PlayerCardComponent } from './player-card/player-card/player-card.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { StatisticsPanelComponent } from './statistics/statistics-panel/statistics-panel.component';
import { ChartComponent } from './chart/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerPanelComponent,
    MainComponentComponent,
    PlayerCardComponent,
    StatisticsPanelComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
