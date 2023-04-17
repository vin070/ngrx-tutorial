import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ApiServiceService } from './api_service/api_service.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFirestoreModule,
    TranslateModule,
  ],

  providers: [ApiServiceService],
})
export class ServicesModule {}
