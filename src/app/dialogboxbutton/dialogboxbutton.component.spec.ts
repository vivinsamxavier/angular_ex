import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxbuttonComponent } from './dialogboxbutton.component';

describe('DialogboxbuttonComponent', () => {
  let component: DialogboxbuttonComponent;
  let fixture: ComponentFixture<DialogboxbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogboxbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
