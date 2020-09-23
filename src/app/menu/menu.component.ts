import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu:any;
  constructor(private _menu: MenuService) { }

  ngOnInit(): void {
    this._menu.getBreakFast().subscribe(
      res =>{
        console.log(res);
        this.menu = res
      }
    )
  }

  public info(id: any) {
    console.log(id)
  }

}
