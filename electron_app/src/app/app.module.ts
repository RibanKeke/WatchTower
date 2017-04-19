import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MaterializeModule } from "ng2-materialize";
import { ServiceLiveComponent } from './service-live/service-live.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component'

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
    MaterializeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }