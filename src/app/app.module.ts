import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { MainService } from './services/main.service';
import { IssuesService } from './services/issues.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailsComponent } from './components/details/details.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetailsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ChartModule
  ],
  providers: [
    MainService,
    IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
