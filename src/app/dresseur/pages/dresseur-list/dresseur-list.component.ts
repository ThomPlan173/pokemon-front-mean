import { dresseur } from '../../../core/models/dresseur';
import { max, Observable, of } from 'rxjs';
import { dresseurService } from './../../services/dresseur.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { dresseurFormComponent } from '../../components/dresseur-form/dresseur-form.component';
import { dresseurFormData } from 'src/app/core/models/dresseurFormData';

@Component({
  selector: 'app-dresseur-list',
  templateUrl: './dresseur-list.component.html',
  styleUrls: ['./dresseur-list.component.scss'],
})
export class dresseurListComponent implements OnInit {
  dresseurs$: Observable<dresseur[]>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _dresseurService: dresseurService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dresseurs$ = this._dresseurService.get();
  }

  showdresseurDetails(dresseur: dresseur) {
    this._router.navigateByUrl('/dresseurs/' + dresseur.id);
  }

  createdresseur() {
    const dresseurFormData: dresseurFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(dresseurFormComponent, {
      data: dresseurFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }
}
