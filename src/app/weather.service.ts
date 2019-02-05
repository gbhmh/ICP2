import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
public url;
public  url2;
  constructor(private http: HttpClient) {
    // this.url = 'http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/MO/kansas%20city.json';
   // this.url2 = 'http://api.wunderground.com/api/36b799dc821d5836/forecast/q/CA/San_Francisco.json';
    // this.url2 = 'http://api.wunderground.com/api/36b799dc821d5836/hourly/q/CA/San_Francisco.json';
  }
  getTemp(code, city) {
    this.url = 'http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + code + '/' + city + '.json';
    return this.http.get(this.url);
  }
  getForecast(code, city) {
    this.url2 = 'http://api.wunderground.com/api/36b799dc821d5836/hourly/q/' + code + '/' + city + '.json';
    return this.http.get(this.url2);
  }
}
