import { Component, ViewChild } from '@angular/core';
import { NavController, Segment } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  public currentSegment:string;

  constructor(public navCtrl: NavController) {
    this.currentSegment='images';
  }

  ionViewDidLoad() {
  }  

  segmentChanged(e: any) {
    console.log(e);
  }

}
