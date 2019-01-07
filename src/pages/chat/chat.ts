import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  personname='person name';

  chats=[
    // {other:1, text:'abcd'},
    // {other:0, text:'efgh'},
    // {other:1, text:'ijkl'},
    // {other:1, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:0, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:0, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:1, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:1, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:0, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:0, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
    // {other:1, text:'mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop mnop '},
  ];
  message: string='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  onSend()
  {
    this.chats.push({other:0,text:this.message});
    this.message='';
  }

}
