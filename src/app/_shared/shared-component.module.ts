import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { PlusSvgComponent } from './svg/plus-svg/plus-svg.component';
import { MinusSvgComponent } from './svg/minus-svg/minus-svg.component';
import { ResetSvgComponent } from './svg/reset-svg/reset-svg.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

const shared_components = [
    LoadingComponent,
    PlusSvgComponent,
    MinusSvgComponent,
    ResetSvgComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    NavigationMenuComponent,
];

@NgModule({
  declarations: shared_components,
  imports: [
      CommonModule,
      RouterModule
  ],
  exports: shared_components
})
export class SharedComponentModule { }
