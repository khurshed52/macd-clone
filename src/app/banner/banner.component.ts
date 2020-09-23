import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Images = [
    {
      images: '../../assets/images/slide-1.jpg', alt:'banner'
    },
    {
      images: '../../assets/images/slide-2.jpg', alt:'banner'
    },
    {
      images: '../../assets/images/slide-3.jpg', alt:'banner'
    },
    {
      images: '../../assets/images/slide-4.jpg', alt:'banner'
    }
  ]

  SlideOptions = {items: 1, dots: false, nav: true , autoplay: true, smartSpeed:1000, autoplayTimeout:3000, loop: true};  
  CarouselOptions = { items: 3, dots: true, nav: true };

}
