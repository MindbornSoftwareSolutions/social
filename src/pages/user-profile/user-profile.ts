import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UploadPostPage } from '../upload-post/upload-post';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { UserSessionProvider } from '../../providers/user-session/user-session';
import { ChangePasswordPage } from '../change-password/change-password';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private storage: Storage, private userSession: UserSessionProvider) {
    }

  ionViewDidLoad() {
  }

  onUploadPost() {
    this.app.getRootNav().push(UploadPostPage);
  }
  
  onChangePassword() {
    this.app.getRootNav().push(ChangePasswordPage);
  }


  onLogout() {
    this.userSession.username = null;
    this.userSession.token = null;
    this.storage.remove('user-session').then(() => {
      this.app.getRootNav().setRoot(LoginPage, null, { animate: true });
    });
  }

}
