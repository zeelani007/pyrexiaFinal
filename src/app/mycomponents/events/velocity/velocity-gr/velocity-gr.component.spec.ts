import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityGRComponent } from './velocity-gr.component';

describe('VelocityGRComponent', () => {
  let component: VelocityGRComponent;
  let fixture: ComponentFixture<VelocityGRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityGRComponent]
    });
    fixture = TestBed.createComponent(VelocityGRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
