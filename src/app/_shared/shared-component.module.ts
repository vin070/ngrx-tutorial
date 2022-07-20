import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EditSvgComponent } from './svg/edit-svg/edit-svg.component';
import { PlusSvgComponent } from './svg/plus-svg/plus-svg.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MinusSvgComponent } from './svg/minus-svg/minus-svg.component';
import { ResetSvgComponent } from './svg/reset-svg/reset-svg.component';
import { DeleteSvgComponent } from './svg/delete-svg/delete-svg.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { VerticalEllipsisSvgComponent } from './svg/vertical-ellipsis-svg/vertical-ellipsis-svg.component';

const shared_components = [
  EditSvgComponent,
  LoadingComponent,
  PlusSvgComponent,
  MinusSvgComponent,
  ResetSvgComponent,
  DeleteSvgComponent,
  PublicLayoutComponent,
  PrivateLayoutComponent,
  NavigationMenuComponent,
  VerticalEllipsisSvgComponent,
];

@NgModule({
  declarations: shared_components,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, 'assets/lang/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
  exports: shared_components,
})
export class SharedComponentModule {}
