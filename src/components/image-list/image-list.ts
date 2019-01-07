import { Component } from '@angular/core';

/**
 * Generated class for the ImageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-list',
  templateUrl: 'image-list.html'
})
export class ImageListComponent {

  text: string;
  posts=[0,1];

  constructor() {
    console.log('Hello ImageListComponent Component');
    this.text = 'img-list';
  }

}
