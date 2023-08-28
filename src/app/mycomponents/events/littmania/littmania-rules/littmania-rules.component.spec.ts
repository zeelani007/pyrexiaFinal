import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittmaniaRulesComponent } from './littmania-rules.component';

describe('LittmaniaRulesComponent', () => {
  let component: LittmaniaRulesComponent;
  let fixture: ComponentFixture<LittmaniaRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LittmaniaRulesComponent]
    });
    fixture = TestBed.createComponent(LittmaniaRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
