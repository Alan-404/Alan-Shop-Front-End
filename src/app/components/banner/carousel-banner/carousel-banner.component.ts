import { Component, OnInit, Input } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.css']
})
export class CarouselBannerComponent implements OnInit {
  @Input() banners: Array<Banner> = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goLink(banner: Banner){
    console.log(banner.link)
    this.router.navigate([banner.link])
  }

}
