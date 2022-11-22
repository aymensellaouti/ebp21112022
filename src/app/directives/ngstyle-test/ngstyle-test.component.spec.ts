import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleTestComponent } from './ngstyle-test.component';

describe('NgstyleTestComponent', () => {
  let component: NgstyleTestComponent;
  let fixture: ComponentFixture<NgstyleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
