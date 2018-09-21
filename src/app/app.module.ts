import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Chart
import { ChartModule } from 'angular2-chartjs';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
