import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataMarketComponent } from './components/data-market/data-market.component';
import { HearComponent } from './components/hear/hear.component';

@NgModule({
  declarations: [
    AppComponent,
    DataMarketComponent,
    HearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
