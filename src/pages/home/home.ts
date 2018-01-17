import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/myapp/weather'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  city: string;
  status:any;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage: Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('city').then((val) => {
      if(val != null)
      {
          this.city = val;
      }
      else
      {
        this.city = 'Prerov';
      }

      this.weatherProvider.getWeather(this.city).subscribe(weather => {
        
          this.weather = weather;
          console.log(weather);
        },
        err => {
          console.log(err);
          this.status="Something went wrong! Check your internet connection.";
        }
      );
    });
  }
}