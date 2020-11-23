import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room4Component } from './room4.component';

describe('Room4Component', () => {
  let component: Room4Component;
  let fixture: ComponentFixture<Room4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Room4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
