import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PostListComponent } from '../../components/post-list';

/**
 * Generated class for the PostListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
})
export class PostListPage {

  currentSegment:'all';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

}
