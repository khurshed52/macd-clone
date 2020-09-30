import { Component, OnInit } from '@angular/core';
declare var sal:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mcd-clone';

  ngOnInit():void {
    sal({
      threshold: 1,
      once: false,
    });
  }
}
