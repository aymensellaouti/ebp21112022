import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFibComponent } from './tab-fib.component';

describe('TabFibComponent', () => {
  let component: TabFibComponent;
  let fixture: ComponentFixture<TabFibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
