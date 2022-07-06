import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { state_name } from './store/posts.selector';
import { post_reducer } from './store/posts.reducer'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../_pipes/pipes.module';
import { PostsEffects } from './store/posts.effects';
import { PostsRoutingModule } from './posts-routing.module';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { TakeInputComponent } from './take-input/take-input.component';

@NgModule({
  declarations: [
      PostListComponent,
      TakeInputComponent,
      EditPostComponent
  ],
  imports: [
      PipesModule,
      CommonModule,
      PostsRoutingModule,
      ReactiveFormsModule,
      EffectsModule.forFeature([PostsEffects]),
      StoreModule.forFeature(state_name,post_reducer),
  ],
  exports: []
})

export class PostsModule { }
