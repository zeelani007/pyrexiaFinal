import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittmaniaComponent } from './littmania.component';

describe('LittmaniaComponent', () => {
  let component: LittmaniaComponent;
  let fixture: ComponentFixture<LittmaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LittmaniaComponent]
    });
    fixture = TestBed.createComponent(LittmaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
