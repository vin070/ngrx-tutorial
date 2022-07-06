import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGard } from './_services/auth_gard/auth-gard.service';
import { PublicLayoutComponent } from './_shared/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_shared/private-layout/private-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'guest/login',
  },
  {
    path: 'logged_in',
    canActivate: [AuthGard],
    component: PrivateLayoutComponent,
    loadChildren: () =>
      import('./logged-in/logged-in.module').then((m) => m.LoggedInModule),
  },
  {
    path: 'guest',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: '**',
    redirectTo: 'guest',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}