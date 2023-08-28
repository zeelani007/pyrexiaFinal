import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancerulesComponent } from './dancerules.component';

describe('DancerulesComponent', () => {
  let component: DancerulesComponent;
  let fixture: ComponentFixture<DancerulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DancerulesComponent]
    });
    fixture = TestBed.createComponent(DancerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
