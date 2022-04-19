import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidateComponent } from './uidate.component';

describe('UidateComponent', () => {
  let component: UidateComponent;
  let fixture: ComponentFixture<UidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
