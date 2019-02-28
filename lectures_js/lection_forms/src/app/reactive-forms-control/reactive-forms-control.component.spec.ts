import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsControlComponent } from './reactive-forms-control.component';

describe('ReactiveFormsControlComponent', () => {
  let component: ReactiveFormsControlComponent;
  let fixture: ComponentFixture<ReactiveFormsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
