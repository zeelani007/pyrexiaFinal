import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicrulesComponent } from './musicrules.component';

describe('MusicrulesComponent', () => {
  let component: MusicrulesComponent;
  let fixture: ComponentFixture<MusicrulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicrulesComponent]
    });
    fixture = TestBed.createComponent(MusicrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
