import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu:any;
  constructor(private _menu: MenuService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._menu.getBreakFast().subscribe(
      res =>{
        console.log(res);
        this.menu = res
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 } 

}
