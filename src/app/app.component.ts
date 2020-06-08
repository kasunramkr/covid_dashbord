import {Component, OnInit} from '@angular/core';
import {CovidApiGetService} from './services/covid-api-get.service';
import {CovidData} from './entity/covid-data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled';
  response: CovidData;

  constructor(private covidGET: CovidApiGetService) {
  }

  ngOnInit() {
    this.covidGET.testApiCall()
      .pipe(map((response: CovidData) => response))
      .subscribe(
        (response) => {
          this.response = response;
          console.log(this.response);
        }
      );
  }
}
