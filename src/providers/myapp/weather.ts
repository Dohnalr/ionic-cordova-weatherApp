
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  string url = "http://api.openweathermap.org/data/2.5/weather?q=";
        string ApiKey = "4976804e720d7e514491be70dbf7b727";
*/
@Injectable()
export class WeatherProvider {
  ApiKey = "4976804e720d7e514491be70dbf7b727";
  url;
  //city = 'Prerov';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';

  }
  getWeather(city){
    return this.http.get(this.url + city + '&appid=' + this.ApiKey+"&units=metric")
    .map(res => res.json()).catch(error => error.json());
  }
}
