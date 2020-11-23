import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room3LockedComponent } from './room3-locked.component';

describe('Room3LockedComponent', () => {
  let component: Room3LockedComponent;
  let fixture: ComponentFixture<Room3LockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room3LockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Room3LockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
