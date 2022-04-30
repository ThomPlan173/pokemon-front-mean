import { dresseurService } from './../../services/dresseur.service';
import { dresseur } from '../../../core/models/dresseur';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dresseurFormData } from 'src/app/core/models/dresseurFormData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dresseur-form',
  templateUrl: './dresseur-form.component.html',
  styleUrls: ['./dresseur-form.component.scss'],
})
export class dresseurFormComponent implements OnInit {
  isUpdateMode: boolean;
  dresseurForm: FormGroup;

  classes: string[] = ['Male', 'Female'];
  constructor(
    private _formBuilder: FormBuilder,
    private _dresseurService: dresseurService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<dresseurFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dresseurFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.dresseurForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.dresseurToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      firstName: [
        this.data.isUpdateMode ? this.data.dresseurToUpdate.firstName : '',
        Validators.required,
      ],
      lastName: [
        this.data.isUpdateMode ? this.data.dresseurToUpdate.lastName : '',
        Validators.required,
      ],
      gender: [
        this.data.isUpdateMode ? this.data.dresseurToUpdate.gender : '',
        Validators.required,
      ],
      dateOfBirth: [
        this.data.isUpdateMode ? this.data.dresseurToUpdate.dateOfBirth : '',
        Validators.required,
      ],
      email: [
        this.data.isUpdateMode ? this.data.dresseurToUpdate.email : '',
        [Validators.required, Validators.email],
      ],
    });
  }

  closeForm(id?: number) {
    this.dresseurForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(dresseur: dresseur) {
    if (this.dresseurForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._dresseurService.update(dresseur).subscribe((response) => {
          this.closeForm(dresseur.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._dresseurService.create(dresseur).subscribe((response) => {
          this.closeForm(dresseur.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
