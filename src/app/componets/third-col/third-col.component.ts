import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-col',
  templateUrl: './third-col.component.html',
  styleUrls: ['./third-col.component.css']
})
export class ThirdColComponent implements OnInit {
  @Input() covidData: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
