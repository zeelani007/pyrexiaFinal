import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicfestComponent } from './musicfest.component';

describe('MusicfestComponent', () => {
  let component: MusicfestComponent;
  let fixture: ComponentFixture<MusicfestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicfestComponent]
    });
    fixture = TestBed.createComponent(MusicfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
