import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionScreenComponent } from './instruction-screen.component';

describe('InstructionScreenComponent', () => {
  let component: InstructionScreenComponent;
  let fixture: ComponentFixture<InstructionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
