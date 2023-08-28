import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolastaComponent } from './solasta.component';

describe('SolastaComponent', () => {
  let component: SolastaComponent;
  let fixture: ComponentFixture<SolastaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolastaComponent]
    });
    fixture = TestBed.createComponent(SolastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
