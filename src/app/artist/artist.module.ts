import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainArtistComponent } from './pages/main-artist/main-artist.component';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';
import { RouterModule } from '@angular/router';
import { DataArtistaComponent } from './components/data-artista/data-artista.component';
import { FormAddArtistComponent } from './components/form-add-artist/form-add-artist.component';
import { BtnControlsComponent } from './components/btn-controls/btn-controls.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainArtistComponent,
    AddArtistComponent,
    DataArtistaComponent,
    FormAddArtistComponent,
    BtnControlsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class ArtistModule { }
