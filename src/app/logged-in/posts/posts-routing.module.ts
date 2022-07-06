import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { TakeInputComponent } from './take-input/take-input.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {
        path: 'add',
        component: TakeInputComponent,
      },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}