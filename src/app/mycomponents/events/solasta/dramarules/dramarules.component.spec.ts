import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramarulesComponent } from './dramarules.component';

describe('DramarulesComponent', () => {
  let component: DramarulesComponent;
  let fixture: ComponentFixture<DramarulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DramarulesComponent]
    });
    fixture = TestBed.createComponent(DramarulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
