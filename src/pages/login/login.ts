import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import Constants from '../../Constants';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { UserSessionProvider } from '../../providers/user-session/user-session';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private storage: Storage, private userSession: UserSessionProvider) {

    this.storage.get('user-session').then((res) => {
      if (res) {
        let u = res['username'];
        let t = res['token'];
        let user=res['user'];

        this.userSession.username=u;
        this.userSession.token=t;
        this.userSession.user=user;

        console.log('Got in storage ' + u, t);

        this.navCtrl.setRoot(TabsPage,null,{animate:true})
      }
      else {
        console.log('session not found');
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    // this.navCtrl.setRoot(TabsPage);
    this.http.get(Constants.BASE_URL + `login.ashx?username=${this.username}&password=${this.password}`)
      .subscribe((res) => {
        let r = res.json();
        console.log(r);
        if (r['result'] === 'success') {
          this.userSession.username = this.username;
          this.userSession.token = r['token'];
          this.userSession.user=r['user'][0];
          this.storage.set('user-session', { username: this.username, token: r['token'], user: r['user'][0] }).then(() => {
            // this.storage.set('token', r['token']);
            this.navCtrl.setRoot(TabsPage, null, { animate: true });
          });
        } else {
          alert('Invalid username or password');
        }
      });
  }

  onRegister() {
    this.navCtrl.push(RegisterPage, null, { animate: true });
  }
}
