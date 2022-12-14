import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRouting } from '../app-routing.module';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AppRouting
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
