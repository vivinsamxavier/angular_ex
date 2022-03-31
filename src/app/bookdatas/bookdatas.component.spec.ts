import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdatasComponent } from './bookdatas.component';

describe('BookdatasComponent', () => {
  let component: BookdatasComponent;
  let fixture: ComponentFixture<BookdatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
