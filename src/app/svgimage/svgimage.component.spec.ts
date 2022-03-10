import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgimageComponent } from './svgimage.component';

describe('SvgimageComponent', () => {
  let component: SvgimageComponent;
  let fixture: ComponentFixture<SvgimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
