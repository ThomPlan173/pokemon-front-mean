import { dresseurFormData } from './../../../core/models/dresseurFormData';
import { dresseurFormComponent } from './../../components/dresseur-form/dresseur-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { dresseurService } from './../../services/dresseur.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { dresseur } from 'src/app/core/models/dresseur';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dresseur-details',
  templateUrl: './dresseur-details.component.html',
  styleUrls: ['./dresseur-details.component.scss'],
})
export class dresseurDetailsComponent implements OnInit {
  dresseur$: Observable<dresseur>;
  constructor(
    private _dresseurService: dresseurService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.dresseur$ = this._dresseurService.getById(id);
  }

  updatedresseur(dresseur: dresseur) {
    const dresseurFormData: dresseurFormData = {
      isUpdateMode: true,
      dresseurToUpdate: dresseur,
    };

    const dialogRef = this._dialog.open(dresseurFormComponent, {
      data: dresseurFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deletedresseur(id: number) {
    this._dresseurService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/dresseurs');
    });
  }

  goBack() {
    this._location.back();
  }
}
