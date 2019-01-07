import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import Constants from '../../Constants';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username = '';
  password = '';
  cpassword = '';
  contact = '';
  email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegister() {
    this.http.get(Constants.BASE_URL + `register.ashx?username=${this.username}&password=${this.password}&contact=${this.contact}&email=${this.email}`)
      .subscribe((res) => {
        console.log(res);
        let result = res.json();
        if (result['result'] === 'success') {
          alert('Registered successfully');
          this.storage.set('user-session', { username: this.username, token: result['token'], user:result['user'][0] }).then(() => {
            // this.storage.set('token', r['token']);
            this.navCtrl.setRoot(TabsPage, null, { animate: true });
          });

        }
        else
        {
          alert('Username already exists. Try different one.');
        }
      });
  }
}
