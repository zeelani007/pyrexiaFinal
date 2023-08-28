import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFFASINATOComponent } from './affasinato.component';

describe('AFFASINATOComponent', () => {
  let component: AFFASINATOComponent;
  let fixture: ComponentFixture<AFFASINATOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFFASINATOComponent]
    });
    fixture = TestBed.createComponent(AFFASINATOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
