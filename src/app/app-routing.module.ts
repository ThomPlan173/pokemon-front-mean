import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dresseurs',
    pathMatch: 'full',
  },
  {
    path: 'dresseurs',
    loadChildren: () =>
      import('./dresseur/dresseur.module').then((m) => m.dresseurModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
