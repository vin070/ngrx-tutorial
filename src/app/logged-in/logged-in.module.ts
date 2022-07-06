import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from './posts/posts.module';
import { CounterModule } from './counter/counter.module';
import { LoggedInRoutingModule } from './logged-in-routing.module';

@NgModule({
  declarations: [],
  imports: [PostsModule, CommonModule, CounterModule, LoggedInRoutingModule],
})
export class LoggedInModule {}
