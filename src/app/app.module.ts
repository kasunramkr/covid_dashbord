import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DateTimeComponent} from './componets/date-time/date-time.component';
import {CovidApiGetService} from './services/covid-api-get.service';
import {SrilankaDetailsComponent} from './componets/srilanka-details/srilanka-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodayDetailsComponent} from './componets/today-details/today-details.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDemoStatisticCardComponent} from './componets/nz-demo-statistic-card/nz-demo-statistic-card.component';
import {NzAlertModule, NzCardModule, NzGridModule, NzSpinModule, NzStatisticModule} from 'ng-zorro-antd';
import {ThirdColComponent} from './componets/third-col/third-col.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    SrilankaDetailsComponent,
    TodayDetailsComponent,
    NzDemoStatisticCardComponent,
    ThirdColComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzStatisticModule,
    NzGridModule,
    NzCardModule,
    NzSpinModule,
    NzAlertModule
  ],
  providers: [CovidApiGetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
