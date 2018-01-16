import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
    this.storage.get('city').then((val) => {

      if(val != null){
        this.city = val;
      }
      else
      {
        this.city = "Prerov";
      }
    }
  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    this.storage.set('city', this.city);
    this.navCtrl.setRoot(HomePage);
  }
}
