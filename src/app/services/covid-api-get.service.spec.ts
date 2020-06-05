import { TestBed } from '@angular/core/testing';

import { CovidApiGetService } from './covid-api-get.service';

describe('CovidApiGetService', () => {
  let service: CovidApiGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidApiGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
