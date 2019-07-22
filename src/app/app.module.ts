import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { SlidesComponent } from './components/slides/slides.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from './interfaces/swiper.interfaces';
import { FormsModule, FormBuilder } from '@angular/forms';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 2,
  keyboard : true,
  pagination : true,
  autoplay : true,
  width : 1200
};

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ListUserComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    FormsModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
