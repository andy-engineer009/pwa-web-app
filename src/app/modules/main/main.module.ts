import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from './swiper/swiper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const routes: Routes = [
{ path: '' , loadChildren : () =>  import('./home/home.module').then(m => m.HomeModule)},
{ path: 'all-rules' , component: SwiperComponent},
{ path: 'splash' , component: SplashScreenComponent}


]

@NgModule({
  declarations: [
    SwiperComponent,
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
