import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiGetService {
  constructor(private httpClient: HttpClient) {
  }

  testApiCall() {
    return this.httpClient.get('https://www.hpb.health.gov.lk/api/get-current-statistical');

  }
}
