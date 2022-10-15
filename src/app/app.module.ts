import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ArtistModule } from './artist/artist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    SharedModule,
    ArtistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
