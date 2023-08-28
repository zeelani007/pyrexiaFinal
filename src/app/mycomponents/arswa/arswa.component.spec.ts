import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArswaComponent } from './arswa.component';

describe('ArswaComponent', () => {
  let component: ArswaComponent;
  let fixture: ComponentFixture<ArswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArswaComponent]
    });
    fixture = TestBed.createComponent(ArswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
