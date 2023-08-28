import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderboltRulesComponent } from './thunderbolt-rules.component';

describe('ThunderboltRulesComponent', () => {
  let component: ThunderboltRulesComponent;
  let fixture: ComponentFixture<ThunderboltRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThunderboltRulesComponent]
    });
    fixture = TestBed.createComponent(ThunderboltRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
