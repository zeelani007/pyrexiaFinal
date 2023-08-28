import { Component } from '@angular/core';

@Component({
  selector: 'app-galary-slider',
  templateUrl: './galary-slider.component.html',
  styleUrls: ['./galary-slider.component.css']
})
export class GalarySliderComponent {
  constructor() { }
  ngOnInit(): void { }
   
  imgCollection: Array<object> = [
      {
        image: '../../../../assets/images/GALLARY/SLIDER/KK.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/KK.JPG',
        alt: 'Musical Night With KK',
        title: 'Musical Night With KK'
      }, {
        image: '../../../../assets/images/GALLARY/SLIDER/LOCALTRAIN.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/LOCALTRAIN.JPG',
        title: 'The Local Train',
        alt: 'The Local Train'
      }, {
        image: '../../../../assets/images/GALLARY/SLIDER/BHANGRA.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/BHANGRA.JPG',
        title: 'The Ultimate Bhangra',
        alt: 'The Ultimate Bhangra'
      }, {
        image: '../../../../assets/images/GALLARY/SLIDER/COMADY.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/COMADY.JPG',
        title: 'Comady with Rahul Dua',
        alt: 'Comady with Rahul Dua'
      }, {
        image: '../../../../assets/images/GALLARY/SLIDER/DJNIGHT.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/DJNIGHT.JPG',
        title: 'Dance Night with DJ Perisha',
        alt: 'Dance Night with DJ Perisha'
      }, {
        image: '../../../../assets/images/GALLARY/SLIDER/MRANDMSPIREXIA.JPG',
        thumbImage: '../../../../assets/images/GALLARY/SLIDER/MRANDMSPIREXIA.JPG',
        title: 'MR & MRS PIREXIA 2019',
        alt: 'MR & MRS PIREXIA 2019'
      }
  ];
}
