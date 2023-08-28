import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalarySliderComponent } from './galary-slider.component';

describe('GalarySliderComponent', () => {
  let component: GalarySliderComponent;
  let fixture: ComponentFixture<GalarySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalarySliderComponent]
    });
    fixture = TestBed.createComponent(GalarySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
