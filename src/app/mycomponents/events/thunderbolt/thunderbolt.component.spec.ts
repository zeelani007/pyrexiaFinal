import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderboltComponent } from './thunderbolt.component';

describe('ThunderboltComponent', () => {
  let component: ThunderboltComponent;
  let fixture: ComponentFixture<ThunderboltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThunderboltComponent]
    });
    fixture = TestBed.createComponent(ThunderboltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
