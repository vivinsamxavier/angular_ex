import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesgirdComponent } from './examplesgird.component';

describe('ExamplesgirdComponent', () => {
  let component: ExamplesgirdComponent;
  let fixture: ComponentFixture<ExamplesgirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplesgirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesgirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
