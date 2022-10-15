import { Component, OnInit } from '@angular/core';
import { ArtistResponse } from '../../interfaces/artist.interface';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-main-artist',
  templateUrl: './main-artist.component.html'
})
export class MainArtistComponent implements OnInit {

  artistas: ArtistResponse[] = [];
  constructor( private artistService: ArtistService ) { }

  ngOnInit(): void {
    this.allAutores();
  }

  allAutores(){
    this.artistService.getArtist()
      .subscribe({
        next: (rs) => {
          this.artistas = rs;
          console.log(this.artistas);
        },
        error: (err) => {
          console.log(err)
          return
        }
      })
  }

}
