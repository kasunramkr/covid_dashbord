import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoStatisticCardComponent } from './nz-demo-statistic-card.component';

describe('NzDemoStatisticCardComponent', () => {
  let component: NzDemoStatisticCardComponent;
  let fixture: ComponentFixture<NzDemoStatisticCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoStatisticCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoStatisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
