import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WeatherService ]
})
export class AppComponent implements OnInit {
  code: string;
  city: string;
  title = 'Weather App';
  public loc: any;
  public  value1: any;
  public  value2: any;
  public  showele: any;
  Weather: any;

  constructor(private citytemp: WeatherService) { }
   ngOnInit() {
     // this.Weather = response;
   }
Show() {

  this.loc = {
    code: this.code,
    city: this.city
  };
  this.citytemp.getTemp(this.loc.code, this.loc.city).subscribe(response => {
    console.log(response);
    this.value1 = response;
    this.showele = true;

    this.citytemp.getForecast(this.loc.code, this.loc.city).subscribe(response2 => {
      console.log(response2);
      this.value2 = response2;
  });
  });
}
}
