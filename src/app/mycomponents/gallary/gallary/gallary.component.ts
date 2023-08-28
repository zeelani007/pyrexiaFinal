import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 100; i++) {
      const src = '../../../../assets/images/GALLARY/gallary/img' +i+'.jpg';
      const caption = 'Image ' + i;
      const thumb =  '../../../../assets/images/GALLARY/gallary/img' +i+'.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
  }
 
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  
  }
  
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
