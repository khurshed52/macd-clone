import { Component, OnInit } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public Images = [
    {
      images: '../../assets/images/slide-1.jpg', alt:'banner', text: 'Deliciously MouthWatering Burgers'
    },
    {
      images: '../../assets/images/slide-2.jpg', alt:'banner', text: 'FOOD AND NUTRITION'
    },
    {
      images: '../../assets/images/slide-3.jpg', alt:'banner', text: 'Nutrition Calculator'
    },
    {
      images: '../../assets/images/slide-4.jpg', alt:'banner', text: 'Garden Salad with Grand Chicken'
    }
  ]

  SlideOptions = {items: 1, dots: true, nav: false , autoplay: true, smartSpeed:1000, autoplayTimeout:3000, loop: true};  
  CarouselOptions = { items: 3, dots: true, nav: false };

  public openDialog() {
    this.dialog.open(DialogBodyComponent, {
      width:'500px'
    })
  }

}
