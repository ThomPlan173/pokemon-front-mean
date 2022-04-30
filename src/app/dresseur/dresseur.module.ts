import { dresseurService } from './services/dresseur.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dresseurRoutingModule } from './dresseur-routing.module';
import { SharedModule } from '../shared/shared.module';
import { dresseurComponent } from './dresseur.component';
import { dresseurListComponent } from './pages/dresseur-list/dresseur-list.component';
import { dresseurDetailsComponent } from './pages/dresseur-details/dresseur-details.component';
import { dresseurFormComponent } from './components/dresseur-form/dresseur-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    dresseurComponent,
    dresseurListComponent,
    dresseurDetailsComponent,
    dresseurFormComponent,
  ],
  imports: [
    CommonModule,
    dresseurRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [dresseurService, MatDatepickerModule, MatNativeDateModule],
})
export class dresseurModule {}
