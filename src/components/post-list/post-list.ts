import { Component } from '@angular/core';

/**
 * Generated class for the PostListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-list',
  templateUrl: 'post-list.html'
})
export class PostListComponent {

  posts: Array<any> = [];

  constructor() {
    console.log('Hello PostListComponent Component');
    this.posts.push(0);
    this.posts.push(1);
    this.posts.push(1);
    this.posts.push(1);
    this.posts.push(1);
  }

}
