import {Component, OnInit} from '@angular/core';
import {CovidApiGetService} from './services/covid-api-get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled';
  response: any;

  constructor(private covidGET: CovidApiGetService) {
  }

  ngOnInit() {
    this.covidGET.testApiCall().subscribe(
      (response) => {
        this.response = response;
        console.log(this.response);
      }
    );
  }
}
