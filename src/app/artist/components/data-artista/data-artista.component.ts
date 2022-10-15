import { Component, Input, OnInit } from '@angular/core';
import { ArtistResponse } from '../../interfaces/artist.interface';

@Component({
  selector: 'app-data-artista',
  templateUrl: './data-artista.component.html'
})
export class DataArtistaComponent implements OnInit {

  constructor() { }

  @Input() artistas: ArtistResponse[] = [];

  ngOnInit(): void {
  }

}
