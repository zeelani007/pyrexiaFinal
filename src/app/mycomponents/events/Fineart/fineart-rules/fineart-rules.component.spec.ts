import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineartRulesComponent } from './fineart-rules.component';

describe('FineartRulesComponent', () => {
  let component: FineartRulesComponent;
  let fixture: ComponentFixture<FineartRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FineartRulesComponent]
    });
    fixture = TestBed.createComponent(FineartRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
