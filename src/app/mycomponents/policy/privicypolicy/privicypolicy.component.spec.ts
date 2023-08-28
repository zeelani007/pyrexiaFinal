import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivicypolicyComponent } from './privicypolicy.component';

describe('PrivicypolicyComponent', () => {
  let component: PrivicypolicyComponent;
  let fixture: ComponentFixture<PrivicypolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivicypolicyComponent]
    });
    fixture = TestBed.createComponent(PrivicypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
