import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { GuestRoutingModule } from './guest-routing.module';
import { ServicesModule } from '../_services/services.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    ServicesModule,
    HttpClientModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class GuestModule { }
