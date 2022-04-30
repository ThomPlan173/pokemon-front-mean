import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dresseurDetailsComponent } from './pages/dresseur-details/dresseur-details.component';
import { dresseurListComponent } from './pages/dresseur-list/dresseur-list.component';
import { dresseurComponent } from './dresseur.component';

const routes: Routes = [
  {
    path: '',
    component: dresseurComponent,
    children: [
      {
        path: '',
        component: dresseurListComponent,
      },
      {
        path: ':id',
        component: dresseurDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dresseurRoutingModule {}
