import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-srilanka-details',
  templateUrl: './srilanka-details.component.html',
  styleUrls: ['./srilanka-details.component.css']
})
export class SrilankaDetailsComponent implements OnInit {
  @Input() covidData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
