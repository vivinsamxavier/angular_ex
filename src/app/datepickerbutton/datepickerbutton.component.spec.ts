import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerbuttonComponent } from './datepickerbutton.component';

describe('DatepickerbuttonComponent', () => {
  let component: DatepickerbuttonComponent;
  let fixture: ComponentFixture<DatepickerbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
