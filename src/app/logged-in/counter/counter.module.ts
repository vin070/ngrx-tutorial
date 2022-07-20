import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { state_name } from './store/counter.selector';
import { counter_reducer } from './store/counter.reducer';
import { ContentComponent } from './counter/counter.component';
import { ContentRoutingModule } from './counter-routing.module';
import { SharedComponentModule } from 'src/app/_shared/shared-component.module';

@NgModule({
  declarations: [ContentComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    SharedComponentModule,
    StoreModule.forFeature(state_name, counter_reducer),
    TranslateModule,
  ],

  exports: [],
})
export class CounterModule {}
