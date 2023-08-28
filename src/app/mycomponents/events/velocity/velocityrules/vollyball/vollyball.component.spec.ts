import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VollyballComponent } from './vollyball.component';

describe('VollyballComponent', () => {
  let component: VollyballComponent;
  let fixture: ComponentFixture<VollyballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VollyballComponent]
    });
    fixture = TestBed.createComponent(VollyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
