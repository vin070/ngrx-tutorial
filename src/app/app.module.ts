import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { shared_state } from './_models/store.model';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loginEffects } from './guest/state/login.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentModule } from './_shared/shared-component.module';
import { HttpInterceptorService } from './_services/http_interceptor/http-interceptor.service';
import { CustomSerializerService } from './_services/custom_serializer/custom-serializer.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializerService,
    }),
    EffectsModule.forRoot([loginEffects]),
    StoreModule.forRoot(shared_state),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, 'assets/lang/', '.json'),
        deps: [HttpClient],
      },
    }),
    AngularFireModule.initializeApp(environment.firebase_config),
    SharedComponentModule,
    BrowserAnimationsModule,
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HttpInterceptorService,
  //   multi:true
  // }],
  bootstrap: [AppComponent],
})
export class AppModule {}
