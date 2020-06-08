import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {CovidData} from '../../entity/covid-data';
import {CovidApiGetService} from '../../services/covid-api-get.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  title = 'untitled';
  response: CovidData;

  constructor(private covidGET: CovidApiGetService) {
  }

  ngOnInit(): void {
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
