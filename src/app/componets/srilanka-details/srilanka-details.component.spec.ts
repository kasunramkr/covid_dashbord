import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankaDetailsComponent } from './srilanka-details.component';

describe('SrilankaDetailsComponent', () => {
  let component: SrilankaDetailsComponent;
  let fixture: ComponentFixture<SrilankaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrilankaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrilankaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
