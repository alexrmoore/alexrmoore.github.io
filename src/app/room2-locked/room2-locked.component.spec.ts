import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2LockedComponent } from './room2-locked.component';

describe('Room2LockedComponent', () => {
  let component: Room2LockedComponent;
  let fixture: ComponentFixture<Room2LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room2LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
