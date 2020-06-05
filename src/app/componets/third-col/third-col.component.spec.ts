import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdColComponent } from './third-col.component';

describe('ThirdColComponent', () => {
  let component: ThirdColComponent;
  let fixture: ComponentFixture<ThirdColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
