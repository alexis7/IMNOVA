import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  title: string;
  mensaje: string;
}

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  otp(){
    this.openDialog();
  }

  firmar(){
    this.openDialogFirma();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title:'OTP', mensaje: 'OTP enviado'}
    });
  }

  openDialogFirma(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title:'Firma', mensaje: 'Documento firmado correctamente, le llegará un email con la confirmación'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/consult/contracts']);
    });
  }
}


