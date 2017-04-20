import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceLiveComponent } from './service-live/service-live.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    ServiceCardComponent,
    ServiceLiveComponent,
    ServiceDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
