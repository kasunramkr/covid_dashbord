import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nz-demo-statistic-card',
  templateUrl: './nz-demo-statistic-card.component.html',
})
export class NzDemoStatisticCardComponent implements OnInit {
  @Input() name: string;
  @Input() value: string;
  @Input() colour: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
