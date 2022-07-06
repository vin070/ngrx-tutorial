import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { state_name } from './store/counter.selector';
import { counter_reducer } from './store/counter.reducer';
import { ContentComponent } from './counter/counter.component';
import { ContentRoutingModule } from './counter-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedComponentModule } from 'src/app/_shared/shared-component.module';

@NgModule({
  declarations: [ContentComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    SharedComponentModule,
    StoreModule.forFeature(state_name, counter_reducer),
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, 'assets/lang/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],

  exports: [],
})
export class CounterModule {}
