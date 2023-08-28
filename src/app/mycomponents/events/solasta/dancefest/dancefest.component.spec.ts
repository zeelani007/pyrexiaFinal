import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancefestComponent } from './dancefest.component';

describe('DancefestComponent', () => {
  let component: DancefestComponent;
  let fixture: ComponentFixture<DancefestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DancefestComponent]
    });
    fixture = TestBed.createComponent(DancefestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
