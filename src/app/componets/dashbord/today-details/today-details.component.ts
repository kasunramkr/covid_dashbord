import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-today-details',
  templateUrl: './today-details.component.html',
  styleUrls: ['./today-details.component.css']
})
export class TodayDetailsComponent implements OnInit {
  @Input() covidData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
