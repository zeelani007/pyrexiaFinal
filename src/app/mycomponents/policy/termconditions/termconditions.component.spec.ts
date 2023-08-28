import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermconditionsComponent } from './termconditions.component';

describe('TermconditionsComponent', () => {
  let component: TermconditionsComponent;
  let fixture: ComponentFixture<TermconditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermconditionsComponent]
    });
    fixture = TestBed.createComponent(TermconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
