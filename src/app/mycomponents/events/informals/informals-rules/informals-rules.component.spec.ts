import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformalsRulesComponent } from './informals-rules.component';

describe('InformalsRulesComponent', () => {
  let component: InformalsRulesComponent;
  let fixture: ComponentFixture<InformalsRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformalsRulesComponent]
    });
    fixture = TestBed.createComponent(InformalsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
