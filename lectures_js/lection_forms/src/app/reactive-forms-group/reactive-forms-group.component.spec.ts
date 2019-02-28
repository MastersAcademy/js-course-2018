import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsGroupComponent } from './reactive-forms-group.component';

describe('ReactiveFormsGroupComponent', () => {
  let component: ReactiveFormsGroupComponent;
  let fixture: ComponentFixture<ReactiveFormsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
