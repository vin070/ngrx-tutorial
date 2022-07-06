import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { ApiServiceService } from './api_service/api_service.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFirestoreModule,
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

  providers:[ ApiServiceService]
})

export class ServicesModule { }
