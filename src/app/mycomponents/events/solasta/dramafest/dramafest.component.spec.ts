import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramafestComponent } from './dramafest.component';

describe('DramafestComponent', () => {
  let component: DramafestComponent;
  let fixture: ComponentFixture<DramafestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DramafestComponent]
    });
    fixture = TestBed.createComponent(DramafestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
