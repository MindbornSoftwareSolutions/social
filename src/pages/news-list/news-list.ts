import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { NewsDetailsPage } from '../news-details/news-details';

/**
 * Generated class for the NewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  posts=[1,2,3];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsListPage');
  }

  onReadMore(post: any)  {
    console.log('orm');
    this.app.getRootNav().push(NewsDetailsPage,{post:post},{animate:true});
  }
}
