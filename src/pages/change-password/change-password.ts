import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import Constants from '../../Constants';
import { UserSessionProvider } from '../../providers/user-session/user-session';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  opassword='';
  password='';
  cpassword='';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private userSession: UserSessionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  onUpdate() {
    this.http.post(Constants.BASE_URL+`changepassword.ashx?password=${this.password}&opassword=${this.opassword}&username=${this.userSession.username}&token=${this.userSession.token}`,{})
    .subscribe((result)=>{
      let r=result.json();
      if(r['result']==='success')      {
        alert('Password changed successfully');
        this.navCtrl.pop();
      }
      else{
        alert('Wrong password');
      }
    });
  }

}
