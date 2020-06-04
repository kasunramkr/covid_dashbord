import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DateTimeComponent} from './componets/date-time/date-time.component';
import {CovidApiGetService} from './services/covid-api-get.service';
import {SrilankaDetailsComponent} from './componets/srilanka-details/srilanka-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodayDetailsComponent} from './componets/today-details/today-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    SrilankaDetailsComponent,
    TodayDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [CovidApiGetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
