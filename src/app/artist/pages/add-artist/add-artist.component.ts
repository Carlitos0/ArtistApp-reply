import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: [
    './add-artist.style.css'
  ]
})
export class AddArtistComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  artistName: string = ''
  musicGender: string = ''
  imgUrl: string = ''
  th: boolean  = true;

  //images
  previsualizacion!: string;
  archivosCapturados: any = [];

  constructor( private artistService: ArtistService, private sanitizier:DomSanitizer ) { }

  ngOnInit(): void {
  }

  captar( e: any ){
    const imageCapture = this.input.nativeElement.files![0];
    this.extraerBase64(imageCapture)
      .then((image: any)  => {
        // this.previsualizacion = image.base
        console.log(image);
      })
      this.archivosCapturados.push(imageCapture);
  }


  visualizar(){
    const imageCapture = this.input.nativeElement.files![0];
    this.extraerBase64(imageCapture)
      .then((image: any)  => {
        this.previsualizacion = image.base
        this.archivosCapturados.push(imageCapture);
        console.log(this.archivosCapturados);
      })
  }


  save( form: NgForm ){
    /* try {
      console.log(form.value)
    } catch (error) {
      console.log(error)
    } */
    const frm = new FormData();
    frm.append('img', this.archivosCapturados[0]);
    console.log(frm);
    // this.artistService.addArtist( form.value );
  }

  clear( form: NgForm ){
    form.reset();
  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg =  window.URL.createObjectURL( $event );
      const image = this.sanitizier.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload =  () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return
    }catch (error) {
        return null;
    }
  })
}
