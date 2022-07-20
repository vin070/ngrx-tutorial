import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { state_name } from './store/posts.selector';
import { post_reducer } from './store/posts.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsEffects } from './store/posts.effects';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../_pipes/pipes.module';
import { PostsRoutingModule } from './posts-routing.module';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { SharedComponentModule } from 'src/app/_shared/shared-component.module';

@NgModule({
  declarations: [PostListComponent, TakeInputComponent, EditPostComponent],
  imports: [
    PipesModule,
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature(state_name, post_reducer),
    TranslateModule,
  ],
  exports: [],
})
export class PostsModule {}
