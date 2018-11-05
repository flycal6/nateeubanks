import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShowsComponent } from './upcoming-shows.component';

describe('UpcomingShowsComponent', () => {
  let component: UpcomingShowsComponent;
  let fixture: ComponentFixture<UpcomingShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
