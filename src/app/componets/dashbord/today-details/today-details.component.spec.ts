import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDetailsComponent } from './today-details.component';

describe('TodayDetailsComponent', () => {
  let component: TodayDetailsComponent;
  let fixture: ComponentFixture<TodayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
