import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {  
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, {
      width: '500px'
    });
  }

}
