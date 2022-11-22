import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassTestComponent } from './ng-class-test.component';

describe('NgClassTestComponent', () => {
  let component: NgClassTestComponent;
  let fixture: ComponentFixture<NgClassTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
