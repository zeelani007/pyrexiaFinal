import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletennsiComponent } from './tabletennsi.component';

describe('TabletennsiComponent', () => {
  let component: TabletennsiComponent;
  let fixture: ComponentFixture<TabletennsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletennsiComponent]
    });
    fixture = TestBed.createComponent(TabletennsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
