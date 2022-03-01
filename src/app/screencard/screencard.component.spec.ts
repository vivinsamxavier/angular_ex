import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreencardComponent } from './screencard.component';

describe('ScreencardComponent', () => {
  let component: ScreencardComponent;
  let fixture: ComponentFixture<ScreencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreencardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
