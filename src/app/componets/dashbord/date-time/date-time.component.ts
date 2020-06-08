import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  dateTime: string;

  constructor() {
    let date;
    setInterval(() => {
      date = new Date();
      this.dateTime = date.toDateString() + ' ' + date.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
