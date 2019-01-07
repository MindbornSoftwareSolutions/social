import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoListComponent } from '../components/video-list/video-list';
import { ImageListComponent } from '../components/image-list/image-list';
import { PostListPageModule } from '../pages/post-list/post-list.module';
import { NewsListPageModule } from '../pages/news-list/news-list.module';
import { PostListPage } from '../pages/post-list/post-list';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { ChatListPageModule } from '../pages/chat-list/chat-list.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NewsDetailsPageModule } from '../pages/news-details/news-details.module';
import { CommentsPageModule } from '../pages/comments/comments.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { UploadPostPageModule } from '../pages/upload-post/upload-post.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { UserSessionProvider } from '../providers/user-session/user-session';
import { ChangePasswordPageModule } from '../pages/change-password/change-password.module';
import { PostlistComponent } from '../components/postlist/postlist';
import { PostListComponent } from '../components/post-list/post-list';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VideoListComponent,
    ImageListComponent,
    PostlistComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    NoopAnimationsModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true
    }),
    HttpModule,
    PostListPageModule,
    NewsListPageModule,
    UserProfilePageModule,
    ChatListPageModule,
    LoginPageModule,
    NewsDetailsPageModule,
    CommentsPageModule,
    ChatPageModule,
    UploadPostPageModule,
    RegisterPageModule,
    IonicStorageModule.forRoot(),
    ChangePasswordPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpModule,
    UserSessionProvider
  ]
})
export class AppModule { }
