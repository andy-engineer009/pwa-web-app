import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from './swiper/swiper.component';

const routes: Routes = [
{ path: '' , loadChildren : () =>  import('./home/home.module').then(m => m.HomeModule)},
{ path: 'all-rules' , component: SwiperComponent}

]

@NgModule({
  declarations: [
    SwiperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
