import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GuestRoutingModule } from './guest-routing.module';
import { ServicesModule } from '../_services/services.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    ServicesModule,
    HttpClientModule,
    GuestRoutingModule,
    ReactiveFormsModule,
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
})
export class GuestModule { }
