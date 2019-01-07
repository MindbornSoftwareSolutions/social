import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPostPage } from './upload-post';

@NgModule({
  declarations: [
    UploadPostPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadPostPage),
  ],
})
export class UploadPostPageModule {}
