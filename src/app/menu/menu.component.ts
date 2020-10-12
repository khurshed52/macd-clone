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
  public burgers:any;
  public loading = true;
  constructor(private _menu: MenuService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._menu.getBreakFast().subscribe(
      res =>{
        console.log(res);
        this.menu = res;
        this.loading = false
      }
    )

    this._menu.getBurger().subscribe(
      res=> {
        console.log(JSON.stringify(res));
        this.burgers = res
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
 } 

  defaultImage = '../../assets/images/animated_spinner.gif';
  dImage = '../../assets/images/logo.svg';
}
