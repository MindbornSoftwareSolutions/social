import { NgModule } from '@angular/core';
import { ImageListComponent } from './image-list/image-list';
import { VideoListComponent } from './video-list/video-list';
import { PostListComponent } from './post-list/post-list';
import { PostlistComponent } from './postlist/postlist';
@NgModule({
	declarations: [ImageListComponent,
    VideoListComponent,
    PostListComponent,
    PostlistComponent],
	imports: [],
	exports: [ImageListComponent,
    VideoListComponent,
    PostListComponent,
    PostlistComponent]
})
export class ComponentsModule {}
