import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuphoriaComponent } from './euphoria.component';

describe('EuphoriaComponent', () => {
  let component: EuphoriaComponent;
  let fixture: ComponentFixture<EuphoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuphoriaComponent]
    });
    fixture = TestBed.createComponent(EuphoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
