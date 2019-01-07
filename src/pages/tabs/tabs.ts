import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PostListPage } from '../post-list/post-list';
import { NewsListPage } from '../news-list/news-list';
import { UserProfilePage } from '../user-profile/user-profile';
import { ChatListPage } from '../chat-list/chat-list';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostListPage;
  tab2Root = HomePage;
  tab3Root = NewsListPage;
  tab4Root = ChatListPage;
  tab5Root = UserProfilePage;

  private username;
  private token;

  constructor(private storage: Storage) {
    this.username=this.storage.get('username');
    this.token=this.storage.get('token');

    console.log(this.username,this.token);
  }
}
