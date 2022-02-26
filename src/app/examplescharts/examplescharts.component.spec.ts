import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleschartsComponent } from './examplescharts.component';

describe('ExampleschartsComponent', () => {
  let component: ExampleschartsComponent;
  let fixture: ComponentFixture<ExampleschartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleschartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleschartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
