import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistResponse } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor( private http: HttpClient ) { }
  private url: string = 'http://localhost:3500';

  getArtist(){
    const url = `${this.url}/artist`
    return this.http.get<ArtistResponse[]>(url);
  }

  addArtist( data: ArtistResponse ){
    const url = `${this.url}/artist`;
    return this.http.post( url, data );
  }
}
