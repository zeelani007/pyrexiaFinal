import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyrexiagotComponent } from './pyrexiagot.component';

describe('PyrexiagotComponent', () => {
  let component: PyrexiagotComponent;
  let fixture: ComponentFixture<PyrexiagotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PyrexiagotComponent]
    });
    fixture = TestBed.createComponent(PyrexiagotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
