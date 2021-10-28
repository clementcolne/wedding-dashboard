import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import { VoyageComponent } from './voyage/voyage.component';
import { GuestsComponent } from './guests/guests.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { StatistiquesComponent } from './statistiques/statistiques.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoyageComponent,
    GuestsComponent,
    StatistiquesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatSidenavModule,
        NgbModule,
        HttpClientModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
