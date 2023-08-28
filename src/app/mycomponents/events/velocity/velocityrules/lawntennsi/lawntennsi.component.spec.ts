import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawntennsiComponent } from './lawntennsi.component';

describe('LawntennsiComponent', () => {
  let component: LawntennsiComponent;
  let fixture: ComponentFixture<LawntennsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawntennsiComponent]
    });
    fixture = TestBed.createComponent(LawntennsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
