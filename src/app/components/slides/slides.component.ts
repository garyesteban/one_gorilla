import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HttpClientService, IAlbumPhoto } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.sass']
})
export class SlidesComponent implements OnInit {

  swiper : Swiper;
  photos: IAlbumPhoto[];
  constructor(private httpClientServices : HttpClientService) { }

  ngOnInit() {
    this.httpClientServices.getSlidesPhotos()
      .subscribe((photos : IAlbumPhoto[]) => {
        this.photos = photos.slice(1,16);
      });
  }

  slideToNext(){
    this.swiper.slideNext(100,true);
  }
}
