import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplespieComponent } from './examplespie.component';

describe('ExamplespieComponent', () => {
  let component: ExamplespieComponent;
  let fixture: ComponentFixture<ExamplespieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplespieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplespieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
