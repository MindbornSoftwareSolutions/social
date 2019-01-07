import { Component } from '@angular/core';
import { Http } from '@angular/http';

/**
 * Generated class for the VideoListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'video-list',
  templateUrl: 'video-list.html'
})
export class VideoListComponent {

  text: string;
  posts=[1,2];

  constructor(private http:Http) {
    console.log('Hello VideoListComponent Component');
    this.text = 'video-list';

    this.http.post('http://18.221.255.105/Services/login.ashx','username=abcd&password=efgh')
    .subscribe((res)=>console.log(res));
  }

}
