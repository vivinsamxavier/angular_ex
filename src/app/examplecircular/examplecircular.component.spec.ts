import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplecircularComponent } from './examplecircular.component';

describe('ExamplecircularComponent', () => {
  let component: ExamplecircularComponent;
  let fixture: ComponentFixture<ExamplecircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplecircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplecircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
